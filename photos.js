let button = document.getElementById("fetch-btn")
button.addEventListener("click", ButtonClicked);

function ButtonClicked() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
    xhr.onprogress = function () {
        console.log("On progress");
    };
    xhr.onload = function () {
        console.log(this.status);
        if (this.status == 200 || this.status == 201) {
            const photos = JSON.parse(this.responseText);
            console.log(photos);
            displayPhotos(photos);
        } else {
            console.log("Page Not found");
        }
    };
    console.log(this.status);
    xhr.send();
}

function displayPhotos(photos) {
    const displayData = document.getElementById("display-data");
    photos.forEach((photo) => {
        let img = document.createElement("img");
        img.classList.add("photo");
        img.style.margin = "10px";
        img.style.padding = "10px";
        img.style.border = "1px solid black";
        img.style.width = "200px";
        img.style.display = "block";
        img.src = photo.url;
        displayData.appendChild(img);
    });
}
