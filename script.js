document.getElementById('speakBtn').addEventListener('click', async () => {
  const message = document.getElementById('message')?.value.trim();
  const emotion = document.getElementById('emotion')?.value;

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

    if (!data?.enhanced) {
      alert("Failed to enhance message. Try again.");
      return;
    }

    const enhancedMessage = data.enhanced.trim();
    console.log("✨ Enhanced:", enhancedMessage);

    // Stop current speech if ongoing
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(enhancedMessage);
    utterance.lang = 'en-US';
    utterance.pitch = 1.1;
    utterance.rate = 1;

    speechSynthesis.speak(utterance);

  } catch (error) {
    console.error("🚨 API Error:", error);
    alert("Something went wrong. Check your internet or backend.");
  }
});
