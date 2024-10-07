let button = document.getElementById("fetch-btn")
button.addEventListener("click", ButtonClicked);

function ButtonClicked() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/albums", true);
    xhr.onprogress = function () {
        console.log("On progress");
    };
    xhr.onload = function () {
        console.log(this.status);
        if (this.status == 200 || this.status == 201) {
            const albums = JSON.parse(this.responseText);
            console.log(albums);
            displayAlbums(albums);
        } else {
            console.log("Page Not found");
        }
    };
    console.log(this.status);
    xhr.send();
}

function displayAlbums(albums) {
    const ul = document.getElementById("display-data");
    for (let i = 0; i < albums.length; i++) {
        const li = document.createElement("li");
        li.classList.add("album");
        li.style.margin = "10px";
        li.style.padding = "10px";
        li.style.border = "1px solid black";
        li.style.width = "200px";
        li.style.display = "block";
        li.innerText = albums[i].title;
        ul.appendChild(li);
    }
}
