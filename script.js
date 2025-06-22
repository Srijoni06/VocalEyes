document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop default reload

    const email = form.querySelector('input[type="email"]').value.trim();
    const password = form.querySelectorAll('input[type="password"]')[0].value.trim();
    const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value.trim();
    const remember = form.querySelector('input[type="checkbox"]').checked;

    // Simple validation
    if (!email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Simulate signup process
    alert(`Signed up successfully!\nEmail: ${email}\nRemember login: ${remember ? "Yes" : "No"}`);

    // Clear form
    form.reset();
  });
});
