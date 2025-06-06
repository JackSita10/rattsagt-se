
document.addEventListener("DOMContentLoaded", function () {
    const section = document.getElementById("warnings-opportunities");
    const list = document.createElement("ul");
    const warning = document.createElement("li");
    warning.textContent = "🚨 Exempelvarning: Kassaflöde sjunker. Se över utgifter.";
    list.appendChild(warning);
    section.appendChild(list);
});
