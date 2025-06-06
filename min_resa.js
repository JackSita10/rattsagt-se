function laggTillLogg() {
    const input = document.getElementById("logg-input");
    const logg = input.value.trim();
    if (logg) {
        const container = document.getElementById("logg-container");
        const rad = document.createElement("div");
        rad.textContent = "🟢 " + logg;
        container.prepend(rad);
        input.value = "";
        // Här kan GPT framtida integreras för minnesloggning
    }
}