const title = document.querySelector("h1");

function entered() {
    title.innerText = "으악@!!";
}

function leaved() {
    title.innerText = "휴,,";
}

title.addEventListener("mouseenter", entered);
title.addEventListener("mouseleave", leaved);
