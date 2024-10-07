let button = document.getElementById("fetch-btn")
button.addEventListener("click", ButtonClicked);

function ButtonClicked() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/comments", true);
    xhr.onprogress = function () {
        console.log("On progress");
    };
    xhr.onload = function () {
        console.log(this.status);
        if (this.status == 200 || this.status == 201) {
            const comments = JSON.parse(this.responseText);
            console.log(comments);
            displayComments(comments);
        } else {
            console.log("Page Not found");
        }
    };
    console.log(this.status);
    xhr.send();
}

function displayComments(comments) {
    const div = document.getElementById("display-data");
    comments.forEach((comment) => {
        const p = document.createElement("p");
        p.innerHTML = `
            <h4>NAME : ${comment.name}</h4>
            <p>EMAIL : ${comment.email}</p>
            <p>COMMENT : ${comment.body}</p>
            <hr>
        `;

        div.appendChild(p);
    });
}
