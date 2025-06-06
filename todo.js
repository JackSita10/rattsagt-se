
document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");

  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

  savedTodos.forEach(todo => {
    const li = createTodoElement(todo.text, todo.done);
    todoList.appendChild(li);
  });

  window.addTodo = function () {
    const text = todoInput.value.trim();
    if (text !== "") {
      const li = createTodoElement(text, false);
      todoList.appendChild(li);
      saveTodos();
      todoInput.value = "";
    }
  };

  function createTodoElement(text, done) {
    const li = document.createElement("li");
    li.textContent = text;
    if (done) li.classList.add("done");

    li.addEventListener("click", () => {
      li.classList.toggle("done");
      saveTodos();
    });

    return li;
  }

  function saveTodos() {
    const todos = [];
    todoList.querySelectorAll("li").forEach(li => {
      todos.push({ text: li.textContent, done: li.classList.contains("done") });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  }
});
