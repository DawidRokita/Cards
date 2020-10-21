const icon = document.querySelector("#icon");
const container = document.querySelector(".container");
const photocircle = document.querySelector(".photocircle");

icon.addEventListener('click', function(){
    container.style.background = "white";
    photocircle.className = "photocircle2";
})