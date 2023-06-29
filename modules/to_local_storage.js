import { createCards } from "./create_cards.js";

createCards();

const toLocal = () => {
	const btns = document.querySelectorAll(".card__btn");
	const shopNum = document.querySelector(".header__shop-span");

	let toLocalArr = [];

	btns.forEach((item, i) => {
		item.addEventListener("click", () => {
			shopNum.classList.remove("none");
			toLocalArr.push(i);
			console.log(toLocalArr.length);
			console.log(toLocalArr);
			localStorage.setItem("toLocalArr", toLocalArr);
			// shopNum.textContent = toLocalArr.length;
			console.log(localStorage.getItem("toLocalArr").length);
			let newArr = Array.from(localStorage.getItem("toLocalArr"));
			newArr = newArr.filter((item) => item !== ",");
			shopNum.textContent = newArr.length;
		});
	});
};

export { toLocal };
