const menu = document.querySelector(".menu");
const menuButtonImage = document.querySelector(".menu-button__image");
const menuButton = document.querySelector(".menu-button");
const menuItems = document.querySelectorAll(".menu-item");
menuButton.addEventListener("click", function(){
    menu.classList.toggle("menu--active");
    if(menu.classList.contains("menu--active")){
        menuButtonImage.src = "./img/logo/menu-opened-icon.png";
    }
    else{
        menuButtonImage.src = "./img/logo/menu-closed-icon.png";
    }
});
menu.addEventListener("click", (event) => {
    if(event.target.tagName != "menu-button"){
        for (let menuItem of menuItems) {
            menuItem.classList.remove("menu-item--active");
        }
        event.target.parentNode.classList.add("menu-item--active");
    }
});
let clicks_1 = 1397;
function clickME_1() {
    clicks_1 += 1;
    document.getElementById("clicks_1").innerHTML = clicks_1 / 1000;
}

let clicks_2 = 21038;
function clickME_2() {
    clicks_2 += 1;
    document.getElementById("clicks_2").innerHTML = clicks_2 / 1000;
}

let clicks_3 = 4391;
function clickME_3() {
    clicks_3 += 1;
    document.getElementById("clicks_3").innerHTML = clicks_3 / 1000;
}