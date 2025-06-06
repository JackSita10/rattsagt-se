
function uploadFile() {
    const input = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
    if (input.files.length > 0) {
        const fileName = input.files[0].name;
        const li = document.createElement('li');
        li.textContent = "✔️ " + fileName;
        fileList.appendChild(li);
    }
}
