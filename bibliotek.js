
document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');

    if (fileInput) {
        fileInput.addEventListener('change', function () {
            fileList.innerHTML = '';
            for (let i = 0; i < fileInput.files.length; i++) {
                const li = document.createElement('li');
                li.textContent = fileInput.files[i].name;
                fileList.appendChild(li);
            }
        });
    }
});
