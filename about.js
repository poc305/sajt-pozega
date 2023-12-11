fetch("https://jsonplaceholder.typicode.com/todos/1").then(response =>{
if(response.ok){
    return response.json();
} else{
    throw new Error("interner konekcija nije u redu");
}
});

const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".closeButton");
const footer = document.querySelector("footer");
let trenutnaGodina = new Date().getFullYear();
const popupWindow = document.getElementById("popupWindow");
const closePopupButton = document.getElementById("closePopupButton");
const buttons = document.getElementsByClassName("viseDetalja");
let naslovPopupa = document.getElementById("naslov");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            naslovPopupa.textContent = "U pripremi...";
            popupWindow.style.display = "block";
        });
    }
    closePopupButton.addEventListener("click", ()=>{
        popupWindow.style.display = "none";
    });

footer.textContent = `© ${trenutnaGodina} Požega`;

function otvoriMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        hamburger.classList.remove("hideHamburger");
        closeButton.classList.remove("showCloseButton");
    } else {
        menu.classList.add("showMenu");
        hamburger.classList.add("hideHamburger");
        closeButton.classList.add("showCloseButton");
    }
}

hamburger.addEventListener("click", otvoriMenu);
closeButton.addEventListener("click", otvoriMenu);
