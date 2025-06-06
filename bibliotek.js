
function uploadFile() {
    const input = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
    if (input.files.length > 0) {
        const file = input.files[0];
        const listItem = document.createElement('div');
        listItem.textContent = '📄 ' + file.name;
        fileList.appendChild(listItem);
    } else {
        alert("Välj en fil att ladda upp.");
    }
}
