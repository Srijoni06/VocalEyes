document.getElementById('signinForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('signinEmail').value.trim();
  const password = document.getElementById('signinPassword').value;
  const errorEl = document.getElementById('loginError');

  errorEl.textContent = '';

  // Temporary validation logic
  if (!email || !password) {
    errorEl.textContent = 'Fill both fields to sign in.';
    return;
  }

  // Simulate login & redirect
  return window.location.href = 'speak.html';
});
