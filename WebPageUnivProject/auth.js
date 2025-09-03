document.addEventListener("DOMContentLoaded", () => {
    let loggedInUser = localStorage.getItem("loggedInUser");

    // Update nav link dynamically
    let regLink = document.getElementById("regLink");
    let logoutBtn = document.getElementById("logoutBtn");

    if (loggedInUser) {
      if (regLink) regLink.href = "id.html"; // logged in users go to ID
      if (logoutBtn) logoutBtn.style.display = "inline-block";
    } else {
      if (regLink) regLink.href = "reg.html"; // normal behavior
      if (logoutBtn) logoutBtn.style.display = "none";
    }
  });

  function logout(){
    localStorage.removeItem("loggedInUser");
    window.location.href = "reg.html";
  }