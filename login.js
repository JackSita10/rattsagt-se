// login.js – Inloggningslogik
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Enkel klientbaserad kontroll (byt ut mot backend i framtiden)
    if (username === "byggare10" && password === "hemligt") {
        sessionStorage.setItem("username", username);
        window.location.href = "dashboard.html";
    } else {
        alert("Fel användarnamn eller lösenord.");
    }
});
