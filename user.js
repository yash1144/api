let button = document.getElementById("fetch-btn")
button.addEventListener("click", ButtonClicked);

function ButtonClicked() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onprogress = function () {
        console.log("On progress");
    };
    xhr.onload = function () {
        console.log(this.status);
        if (this.status == 200 || this.status == 201) {
            const users = JSON.parse(this.responseText);
            console.log(users);
            displayUser(users);
        } else {
            console.log("Page Not found");
        }
    };
    console.log(this.status);
    xhr.send();
}

function displayUser(users) {
    const userList = document.getElementById("display-data");
    userList.innerHTML = "";
    users.forEach((user) => {
        let userDiv = document.createElement("div");
        userDiv.classList.add("user-card");
        userDiv.style.margin = "10px";
        userDiv.style.padding = "10px";
        userDiv.style.border = "1px solid black";
        userDiv.innerHTML = `
                <h3>${user.name}</h3>
                <p>Username: ${user.username}</p>
                <p>Email: ${user.email}</p>
                <p>ID: ${user.id}</p>
                <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                <p>Phone: ${user.phone}</p>
                `;
        userList.appendChild(userDiv);
    });
}