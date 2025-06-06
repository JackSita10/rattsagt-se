
function läggTillNotis() {
    const input = document.getElementById('notisInput');
    const lista = document.getElementById('notisLista');

    if (input.value.trim() !== "") {
        const nyNotis = document.createElement('li');
        nyNotis.textContent = input.value;
        lista.appendChild(nyNotis);
        input.value = "";
    }
}
