
function uploadFile() {
    const input = document.getElementById('fileInput');
    const list = document.getElementById('fileList');
    if (input.files.length === 0) return;

    const li = document.createElement('li');
    li.textContent = input.files[0].name + ' (uppladdad lokalt – ej sparad)';
    list.appendChild(li);
}
