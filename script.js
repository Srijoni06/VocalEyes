document.getElementById('speakBtn').addEventListener('click', async () => {
  const message = document.getElementById('message').value.trim();
  const emotion = document.getElementById('emotion').value;

  if (!message) {
    alert("Please enter a message.");
    return;
  }

  try {
    const response = await fetch('https://vocal-eyes-k95lcx0hd-srijoni-s-projects.vercel.app/api/enhance', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message, emotion })
    });

    const data = await response.json();

    if (!data.enhanced) {
      alert("Failed to enhance message. Try again.");
      return;
    }

    const enhancedMessage = data.enhanced.trim();
    console.log("Enhanced Message:", enhancedMessage);

    // Speak the message
    const utterance = new SpeechSynthesisUtterance(enhancedMessage);
    utterance.rate = 1;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);

  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  }
});
