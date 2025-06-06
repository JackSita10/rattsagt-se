
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('todo-list');
    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function uploadFile() {
    const input = document.getElementById('fileInput');
    const list = document.getElementById('fileList');
    if (input.files.length > 0) {
        const li = document.createElement('li');
        li.textContent = input.files[0].name;
        list.appendChild(li);
    }
}
