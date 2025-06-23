document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const signinForm = document.getElementById("signinForm");
  const speakBtn = document.getElementById("speakBtn");

  // ✨ Sign Up Page Logic
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const rememberMe = document.getElementById("rememberMe").checked;

      if (password !== confirmPassword) {
        alert("Passwords don’t match, baby 😭");
        return;
      }

      if (rememberMe) {
        localStorage.setItem("vocaleyes_user", email);
      }

      window.location.href = "speak.html";
    });
  }

  // 🔐 Sign In Page Logic
  if (signinForm) {
    signinForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      if (!email || !password) {
        alert("Don’t leave me hangin’, fill all fields 🫣");
        return;
      }

      // Optional: verify credentials here if needed
      window.location.href = "speak.html";
    });
  }

  // 🗣️ Speak Page Logic
  if (speakBtn) {
    speakBtn.addEventListener("click", async () => {
      const message = document.getElementById("message").value.trim();
      const emotion = document.getElementById("emotion").value;

      if (!message) {
        alert("Type something first, babygirl 😤");
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
          alert("Something went wrong, daddy 😭 try again later.");
          return;
        }

        const enhancedMessage = data.enhanced.trim();
        console.log("✨ Enhanced Message:", enhancedMessage);

        // Cancel if already speaking
        if (speechSynthesis.speaking) {
          speechSynthesis.cancel();
        }

        const utterance = new SpeechSynthesisUtterance(enhancedMessage);
        utterance.rate = 1;
        utterance.pitch = 1.2;
        speechSynthesis.speak(utterance);

      } catch (err) {
        console.error("Fetch error:", err);
        alert("Error speaking out your message, babygirl 😭");
      }
    });
  }
});
