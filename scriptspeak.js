document.addEventListener("DOMContentLoaded", () => {
  const speakBtn = document.getElementById("speakBtn");

  if (speakBtn) {
    speakBtn.addEventListener("click", async () => {
      const message = document.getElementById("message").value.trim();
      const emotion = document.getElementById("emotion").value;

      if (!message) {
        alert("Type something first 😤");
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
          alert("Something went wrong 😭 try again later.");
          return;
        }

        const enhancedMessage = data.enhanced.trim();
        console.log("✨ Enhanced Message:", enhancedMessage);

        if (speechSynthesis.speaking) {
          speechSynthesis.cancel(); // Stop current speaking
        }

        const utterance = new SpeechSynthesisUtterance(enhancedMessage);

        // 💅 Emotion-Based Voice Settings
        switch (emotion.toLowerCase()) {
          case "happy":
            utterance.pitch = 1.5;
            utterance.rate = 1.2;
            utterance.volume = 1;
            break;
          case "sad":
            utterance.pitch = 0.8;
            utterance.rate = 0.9;
            utterance.volume = 0.8;
            break;
          case "angry":
            utterance.pitch = 1.1;
            utterance.rate = 1.4;
            utterance.volume = 1;
            break;
          case "surprised":
            utterance.pitch = 1.8;
            utterance.rate = 1.3;
            utterance.volume = 1;
            break;
          case "nervous":
            utterance.pitch = 1.3;
            utterance.rate = 1.5;
            utterance.volume = 0.9;
            break;
          case "fear":
            utterance.pitch = 1.3;
            utterance.rate = 1;
            utterance.volume = 0.7;
            break;
          case "disgust":
            utterance.pitch = 0.7;
            utterance.rate = 0.8;
            utterance.volume = 0.9;
            break;
          default:
            utterance.pitch = 1;
            utterance.rate = 1;
            utterance.volume = 1;
        }

        // 🗣️ Speak it loud, speak it emotional
        speechSynthesis.speak(utterance);

      } catch (err) {
        console.error("Fetch error:", err);
        alert("Error speaking out your message 😭");
      }
    });
  }
});
