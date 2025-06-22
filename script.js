document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Basic validation (you can add more if needed)
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;

  if (password !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  // Simulate successful signup and redirect
  window.location.href = "speak.html";
});
