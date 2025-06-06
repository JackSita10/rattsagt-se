
function uploadFile() {
    const input = document.getElementById('fileInput');
    const list = document.getElementById('fileList');
    if (input.files.length > 0) {
        const file = input.files[0];
        const item = document.createElement('div');
        item.textContent = '📄 ' + file.name;
        list.appendChild(item);
    } else {
        alert('Ingen fil vald');
    }
}
