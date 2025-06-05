
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Byggare10" && password === "Rattsagt2025") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("login-error").innerText = "Fel användarnamn eller lösenord.";
  }
}
