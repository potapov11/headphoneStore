import { createCatCards } from "./modules/create_catalog_cards.js";
createCatCards();

let toLocalArr = Array.from(localStorage.getItem("toLocalArr"));
toLocalArr = toLocalArr.filter((item) => item !== ",");
console.log(toLocalArr);
console.log(typeof toLocalArr[0]);

const cards = document.querySelectorAll(".card");
cards.forEach((cardItem, i) => {
	cardItem.addEventListener("click", (e) => {
		if (e.target.tagName === "BUTTON") {
			console.log("button");
			// console.dir(cardItem);
			const dataValue = cardItem.getAttribute("data");
			console.log(dataValue);
			console.log(typeof dataValue);
			const index = toLocalArr.findIndex((item) => item === dataValue);
			if (index !== -1) {
				toLocalArr.splice(index, 1); // удаляем элемент из массива по индексу
			}
			console.log(toLocalArr);
			localStorage.setItem("toLocalArr", toLocalArr);
			cardItem.remove();
		}
	});
});
