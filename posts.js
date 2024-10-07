let button = document.getElementById("fetch-btn")
button.addEventListener("click", ButtonClicked);

function ButtonClicked() {
    const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onprogress = function () {
        console.log("On progress");
    };
    xhr.onload = function () {
        console.log(this.status);
        if (this.status == 200 || this.status == 201) {
            const posts = JSON.parse(this.responseText);
            console.log(posts);
            displayPosts(posts);
        } else {
            console.log("Page Not found");
        }
    };
    console.log(this.status);
    xhr.send();
}

function displayPosts(posts) {
    const div = document.getElementById("display-data");
    posts.forEach((post) => {
        const p = document.createElement("p");
        p.classList.add("post");
        p.style.margin = "10px";
        p.style.padding = "10px";
        p.style.border = "1px solid black";
        p.style.display = "block";
        p.innerHTML = `
            <h4>ID : ${post.id}</h4>
            <p>TITLE : ${post.title}</p>
            <p>BODY : ${post.body}</p>
            <hr>
        `;
        div.appendChild(p);
    });
}