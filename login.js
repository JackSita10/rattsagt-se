document.getElementById("loginform").addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    if (user === "admin" && pass === "admin123") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("message").textContent = "Fel användarnamn eller lösenord.";
    }
});