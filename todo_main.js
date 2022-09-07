'use strict'

const todos = [];

const inputBox = document.getElementById("input-todo-box");
const addButton = document.getElementById("add-button");
const listContainer = document.getElementById("todo-list");

addButton.addEventListener("click", function() {
    const todo = inputBox.value;
    inputBox.value = "";

    if(todo) {
        todos.push(todo);
        showTodos();
    }
});

function showTodos() {
    while(listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild);
    }

    todos.forEach((todo, index) => {
        const todoItem = document.createElement("li");
        const taskNumber = index + 1;

        todoItem.textContent = `${taskNumber} : ${todo}`;
        listContainer.appendChild(todoItem);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "削除";
        deleteButton.addEventListener("click", function() {
            deleTodo(index);
        });
        todoItem.appendChild(deleteButton);
    });
}

function deleTodo(index) {
    todos.splice(index, 1);
    showTodos();
}
