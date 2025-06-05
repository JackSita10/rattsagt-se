
function checkPassword() {
    const pw = document.getElementById("password").value;
    if (pw === "Rattsagt2025") {
        window.location.href = "dashboard.html";
    } else {
        alert("Fel lösenord");
    }
}

function talkToGPT() {
    alert("GPT-knappen är ännu inte aktivt kopplad.");
}
