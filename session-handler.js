// session-handler.js – Kollar om användaren är inloggad
document.addEventListener("DOMContentLoaded", () => {
    const username = sessionStorage.getItem("username");
    if (!username) {
        window.location.href = "index.html"; // omdirigera till login
    } else {
        const nameField = document.getElementById("username-display");
        if (nameField) {
            nameField.textContent = username;
        }
    }
});
