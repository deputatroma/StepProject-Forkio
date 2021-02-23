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