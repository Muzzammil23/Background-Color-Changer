console.log("hello");
const body = document.querySelector('body');
const button = document.querySelector('button');
const text = document.querySelector('h2');

function changeBackgroundColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let RGB = `rgb(${red},${green},${blue})`;
    text.innerText = RGB;
    body.style.backgroundColor = RGB;
}

button.addEventListener("click", function() {
    changeBackgroundColor();
});

document.addEventListener("keydown", function(event) {
    if (event.key === " ") {
        changeBackgroundColor();
    }
});
