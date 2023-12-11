"use strict";

fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
	if (response.ok) {
		return response.json();
	} else {
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
const viseDetaljaButton = document.getElementById("viseDetalja");

let buttonContainer = document.getElementById("buttonContainer");
buttonContainer ? buttonContainer.classList.add("flex-container") : null;
let naslovPopupa = document.getElementById("naslov");
const buttonYes = document.createElement("button");
buttonYes.textContent = "Da";
const buttonNo = document.createElement("button");
buttonNo.textContent = "Ne";

function showPopup() {
	if (!popupWindow.contains(buttonContainer)) {
		popupWindow.appendChild(buttonContainer);
	}
	naslovPopupa.textContent = "Je l' nam dobar sajt?";
	popupWindow.style.display = "block";
	buttonContainer.appendChild(buttonYes);
	buttonContainer.appendChild(buttonNo);
	buttonContainer.style.display = "flex";
	buttonContainer.style.justifyContent = "space-around";
	closePopupButton.addEventListener("click", () => {
		popupWindow.style.display = "none";
	});
	buttonYes.addEventListener("click", () => {
		if (buttonContainer.contains(buttonYes)) {
			buttonContainer.removeChild(buttonYes);
		}
		if (buttonContainer.contains(buttonNo)) {
			buttonContainer.removeChild(buttonNo);
		}
		naslovPopupa.textContent = "Hvala, znamo.";
	});
	buttonNo.addEventListener("click", () => {
		popupWindow.style.display = "none";
		window.open("https://www.lazalazarevic.rs/", "_blank");
	});
	viseDetaljaButton.addEventListener("click", () => {
		naslovPopupa.textContent = "U pripremi...";
		if (buttonContainer.contains(buttonYes)) {
			buttonContainer.removeChild(buttonYes);
		}
		if (buttonContainer.contains(buttonNo)) {
			buttonContainer.removeChild(buttonNo);
		}
	});
}

viseDetaljaButton
	? viseDetaljaButton.addEventListener("click", () => {
			showPopup();
	  })
	: null;

setTimeout(showPopup, 3000);

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
