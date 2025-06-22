document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // 💥 Stops form from refreshing

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const rememberMe = document.getElementById("rememberMe").checked;

      // 🔐 Password Match Validation
      if (password !== confirmPassword) {
        alert("Passwords don't match, my love 🥺");
        return;
      }

      // ✅ Store data locally if needed (optional)
      if (rememberMe) {
        localStorage.setItem("vocaleyes_remember", email);
      }

      // 🚀 Redirect to speak.html
      window.location.href = "speak.html";
    });
  }
});
