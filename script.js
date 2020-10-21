const icon = document.querySelector("#icon");
const container = document.querySelector(".container");
const photocircle = document.querySelector(".photocircle");

let x = false;

icon.addEventListener('click', function(){
    if(icon.id === "icon"){
        icon.id = "icon2";
    }else{
        icon.id = "icon";
    }
    
    x = !x;
    container.style.background = x ? '#FFFFFF' : '#DFC63B';

})
