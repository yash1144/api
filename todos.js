let button = document.getElementById("fetch-btn")
button.addEventListener("click", ButtonClicked);

function ButtonClicked() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhr.onprogress = function () {
        console.log("On progress");
    };
    xhr.onload = function () {
        console.log(this.status);
        if (this.status == 200 || this.status == 201) {
            const todos = JSON.parse(this.responseText);
            console.log(todos);
            displayTodos(todos);
        } else {
            console.log("Page Not found");
        }
    };
    console.log(this.status);
    xhr.send();
}

function displayTodos(todos) {

    const todoList = document.getElementById("display-data");
    todoList.innerHTML = "";

    todos.forEach((todo) => {
        let todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-card");
        todoDiv.style.margin = "10px";
        todoDiv.style.padding = "10px";
        todoDiv.style.border = "1px solid black";

        todoDiv.innerHTML = `
        <h3>${todo.title}</h3>
        <p>Completed: ${todo.completed}</p>
        <p>ID: ${todo.id}</p>
        `;

        todoList.appendChild(todoDiv);
    });
}
