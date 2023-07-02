import { createCatCards } from "./modules/create_catalog_cards.js";
const shopIcon = document.querySelector(".header__shop-icon");
let totalPrice = document.querySelector(".total__price");

createCatCards();

const prices = document.querySelectorAll(".main-catalog__price");
const price = Array.from(prices).reduce((total, item) => {
	const price = Number(item.textContent);
	return total + price;
}, 0);

totalPrice.textContent = price;

// let toLocalArr = Array.from(localStorage.getItem("toLocalArr"));
let toLocalArr = JSON.parse(localStorage.getItem("toLocalArr"));
// toLocalArr = toLocalArr.filter((item) => item !== ",");

// let newArr = Array.from(localStorage.getItem("toLocalArr"));
let newArr = JSON.parse(localStorage.getItem("toLocalArr"));
if (newArr) {
	// newArr = newArr.filter((item) => item !== ",");
	shopIcon.classList.remove("none");
	shopIcon.textContent = newArr.length;
}

const cards = document.querySelectorAll(".main-catalog__card");
cards.forEach((cardItem, i) => {
	cardItem.addEventListener("click", (e) => {
		if (e.target.tagName === "BUTTON") {
			const dataValue = cardItem.getAttribute("data");
			console.log(typeof dataValue);
			const index = toLocalArr.findIndex((item) => item === Number(dataValue));
			if (index !== -1) {
				toLocalArr.splice(index, 1); // удаляем элемент из массива по индексу
			}
			console.log(toLocalArr);
			localStorage.setItem("toLocalArr", JSON.stringify(toLocalArr));
			cardItem.remove();
			shopIcon.textContent--;

			let price = Number(prices[i].textContent);
			console.log(price);
			totalPrice.textContent = totalPrice.textContent - price;
		}
	});
});
