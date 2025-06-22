document.getElementById('speakBtn').addEventListener('click', async () => {
  const message = document.getElementById('message').value.trim();
  const emotion = document.getElementById('emotion').value;

  if (!message) {
    alert("Please enter a message.");
    return;
  }

  try {
    const response = await fetch('/api/enhance', {
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
    console.log("🔊 Enhanced Message:", enhancedMessage);

    // Speak the enhanced message with emotion
    const utterance = new SpeechSynthesisUtterance(enhancedMessage);
    utterance.lang = 'en-US';
    utterance.rate = 1;
    utterance.pitch = 1.1; // slight pitch boost for more expression

    speechSynthesis.speak(utterance);

  } catch (error) {
    console.error("🚨 Error:", error);
    alert("Something went wrong. Please try again.");
  }
});

