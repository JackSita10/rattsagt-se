
document.getElementById('fileInput').addEventListener('change', function() {
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = '';
    for (const file of this.files) {
        const li = document.createElement('li');
        li.textContent = file.name;
        fileList.appendChild(li);
    }
});
