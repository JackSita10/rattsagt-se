
function startGPT() {
    alert("GPT startar här – integration kommer snart!");
}
function uploadFile() {
    const input = document.getElementById("fileInput");
    const list = document.getElementById("fileList");
    if (input.files.length > 0) {
        const li = document.createElement("li");
        li.textContent = input.files[0].name + " (uppladdad)";
        list.appendChild(li);
    }
}
