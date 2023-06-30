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

console.log(price); // для проверки в консоли

console.log(prices);
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
			console.dir(e.target);
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

			let price = Number(prices[i].textContent);
			console.log(price);
			totalPrice.textContent = totalPrice.textContent - price;
		}
	});
});
