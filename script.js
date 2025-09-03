// Redirect check at every load
document.addEventListener("DOMContentLoaded", function () {
  const loggedIn = localStorage.getItem("loggedIn");

  // If already logged in and user tries to access reg.html → redirect to my-id.html
  if (loggedIn === "true" && window.location.pathname.includes("reg.html")) {
    window.location.href = "my-id.html";
  }
});
// Toggle functions
function showLogin() {
  document.getElementById("registerSection").style.display = "none";
  document.getElementById("loginSection").style.display = "block";
}

function showRegister() {
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("registerSection").style.display = "block";
}

// ✅ Registration
// Registration
document.getElementById('registrationForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const userData = {
    firstName: document.getElementById('firstName').value,
    middleName: document.getElementById('middleName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    password: document.getElementById('password').value // ✅ store password
  };

  localStorage.setItem('userData', JSON.stringify(userData));
  localStorage.setItem("loggedIn", "true");

  alert("Registration successful! Redirecting to ID.");
  window.location.href = "my-id.html"; // ✅ go to correct page
});

// Login
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const savedUser = JSON.parse(localStorage.getItem('userData'));
  const loginEmail = document.getElementById('loginEmail').value;
  const loginPassword = document.getElementById('loginPassword').value;

  if (savedUser && savedUser.email === loginEmail && savedUser.password === loginPassword) {
    localStorage.setItem("loggedIn", "true");
    alert("Login successful!");
    window.location.href = "my-id.html";
  } else {
    alert("Invalid credentials.");
  }
});
