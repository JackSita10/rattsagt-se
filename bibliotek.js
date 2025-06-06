
function uploadFile() {
    const input = document.getElementById('fileInput');
    const list = document.getElementById('fileList');
    if (input.files.length > 0) {
        const item = document.createElement('li');
        item.textContent = input.files[0].name;
        list.appendChild(item);
    }
}
