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


document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const loginEmail = document.getElementById('loginEmail').value;
  const loginPassword = document.getElementById('loginPassword').value;

  // Find user with matching email and password
  const foundUser = users.find(user => user.email === loginEmail && user.password === loginPassword);

  if (foundUser) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userData", JSON.stringify(foundUser)); 
    alert("Login successful!");
    window.location.href = "my-id.html";
  } else {
    alert("Invalid credentials.");
  }
});
