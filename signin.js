document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signinForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      if (!email || !password) {
        alert("Fill in both fields 😤");
        return;
      }

      // 🔒 Dummy login logic
      alert("Welcome back, you're in! 💅");
      window.location.href = "speak.html";
    });
  }
});
