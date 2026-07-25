let todoInput = document.getElementById("todoInput");
let addTodo = document.getElementById("addTodo");
let output = document.getElementById("output");
let message = document.getElementById("message");

let todos = [];
let editIndex = -1;

function renderTodos() {

    output.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {

        let taskDiv = document.createElement("div");
        taskDiv.style.margin = "10px";

        let taskText = document.createElement("span");
        taskText.innerText = todos[i].task;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.style.marginLeft = "10px";

        deleteBtn.addEventListener("click", function () {
            todos.splice(i, 1);
            renderTodos();
        });
        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.style.marginLeft ="10px"

        taskDiv.appendChild(taskText);
        taskDiv.appendChild(editBtn);
        taskDiv.appendChild(deleteBtn);
        output.appendChild(taskDiv);
    }
}
addTodo.addEventListener("click", function () {

    if (todoInput.value.trim() === "") {
        message.innerText = "Please enter a task";
        return;
    }

    message.innerText = "";

    let todo = {
        task: todoInput.value,
        completed: false
    };

    todos.push(todo);

    renderTodos();

    todoInput.value = "";
});


