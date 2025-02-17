const title = document.querySelector("h1");

function entered() {
    title.innerText = "으악@!!";
}

function leaved() {
    title.innerText = "휴,,";
}

function resized() {
    document.body.style.backgroundColor = "tomato";
}

title.addEventListener("mouseenter", entered);
title.addEventListener("mouseleave", leaved);

window.addEventListener("resifze", resized);
