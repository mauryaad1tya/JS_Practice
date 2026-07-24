let todoInput = document.getElementById("todoInput");
let addTodo = document.getElementById("addTodo");
let output = document.getElementById("output");
let message = document.getElementById("message");

let todos = [];

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

    output.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {

        let taskDiv = document.createElement("div");

        let taskText = document.createElement("span");
        taskText.innerText = todos[i].task;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

        deleteBtn.addEventListener("click", function () {
            taskDiv.remove();
        });

        taskDiv.appendChild(taskText);
        taskDiv.appendChild(deleteBtn);

        output.appendChild(taskDiv);
    }

    todoInput.value = "";
});