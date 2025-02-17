const title = document.querySelector("h1");

function changeColor() {
    changeClass = "actived";
    title.classList.toggle(changeClass);
}

title.addEventListener("click",changeColor);