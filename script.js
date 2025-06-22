document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form refresh

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const rememberMe = document.getElementById("rememberMe").checked;

  // Password match check
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // OPTIONAL: Store email locally (just for demo purposes)
  localStorage.setItem("vocaleyes_user", email);
  if (rememberMe) {
    localStorage.setItem("rememberMe", "true");
  }

  // Redirect to emotion input page
  window.location.href = "speak.html";
});

    speechSynthesis.speak(utterance);

  } catch (error) {
    console.error("🚨 API Error:", error);
    alert("Something went wrong. Check your internet or backend.");
  }
});
