function startGPT() {
    alert("GPT-knappen är förberedd för framtida koppling.");
}

document.getElementById('fileInput').addEventListener('change', function () {
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = '';
    for (let i = 0; i < this.files.length; i++) {
        const li = document.createElement('li');
        li.textContent = this.files[i].name;
        fileList.appendChild(li);
    }
});
