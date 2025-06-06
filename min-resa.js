document.addEventListener("DOMContentLoaded", () => {
  const loggElement = document.getElementById("gpt-logg");
  const logg = JSON.parse(localStorage.getItem("gptLogg")) || [];

  function visaLogg() {
    loggElement.innerHTML = "";
    if (logg.length === 0) {
      loggElement.innerHTML = "<p>Ingen sparad historik ännu.</p>";
    } else {
      const lista = document.createElement("ul");
      logg.forEach((post) => {
        const li = document.createElement("li");
        li.textContent = `${post.tid} – ${post.text}`;
        lista.appendChild(li);
      });
      loggElement.appendChild(lista);
    }
  }

  // Exempel: logga en ny händelse
  const nyHandelse = { tid: new Date().toLocaleString(), text: "Dashboard laddad och visad." };
  logg.push(nyHandelse);
  localStorage.setItem("gptLogg", JSON.stringify(logg));

  visaLogg();
});