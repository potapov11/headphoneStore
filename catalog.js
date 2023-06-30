import { createCatCards } from "./modules/create_catalog_cards.js";
const shopIcon = document.querySelector(".header__shop-icon");
createCatCards();

let toLocalArr = Array.from(localStorage.getItem("toLocalArr"));
toLocalArr = toLocalArr.filter((item) => item !== ",");
console.log(toLocalArr);
console.log(typeof toLocalArr[0]);

console.log(shopIcon);
let newArr = Array.from(localStorage.getItem("toLocalArr"));
if (newArr) {
	newArr = newArr.filter((item) => item !== ",");
	shopIcon.classList.remove("none");
	shopIcon.textContent = newArr.length;
}

const cards = document.querySelectorAll(".main-catalog__card");
cards.forEach((cardItem, i) => {
	cardItem.addEventListener("click", (e) => {
		if (e.target.tagName === "BUTTON") {
			console.log("button");
			const dataValue = cardItem.getAttribute("data");
			console.log(typeof dataValue);
			const index = toLocalArr.findIndex((item) => item === dataValue);
			if (index !== -1) {
				toLocalArr.splice(index, 1); // удаляем элемент из массива по индексу
			}
			console.log(toLocalArr);
			localStorage.setItem("toLocalArr", toLocalArr);
			cardItem.remove();
			shopIcon.textContent--;
		}
	});
});
