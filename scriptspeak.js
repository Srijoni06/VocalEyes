const speakButton = document.getElementById("speakButton");

speakButton.addEventListener("click", async () => {
  const message = document.getElementById("messageInput").value.trim();
  const emotion = document.getElementById("emotionSelect").value;

  if (!message) {
    alert("Please type a message first.");
    return;
  }

  try {
    const response = await fetch("/api/enhance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: message,
        emotion: emotion
      })
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || "Failed to get response");
    }

    const enhancedMessage = data.enhancedMessage.trim();
    console.log("Enhanced:", enhancedMessage);

    // Speak the message
    const utterance = new SpeechSynthesisUtterance(enhancedMessage);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  }
});
