import { createCards } from "./create_cards.js";

createCards();

const toLocal = () => {
	const btns = document.querySelectorAll(".card__btn");
	const shopNum = document.querySelector(".header__shop-span");
	console.log(btns);
	let count = 0;

	let toLocalArr = [];
	shopNum.textContent = toLocalArr.length;

	btns.forEach((item, i) => {
		item.addEventListener("click", () => {
			// count++;
			shopNum.classList.remove("none");
			// shopNum.textContent = count;
			toLocalArr.push(i);
			console.log(toLocalArr.length);
			console.log(toLocalArr);
			localStorage.setItem("toLocalArr", toLocalArr);
			shopNum.textContent = toLocalArr.length;
		});
	});
};

export { toLocal };
