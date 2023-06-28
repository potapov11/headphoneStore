import { createCards } from "./create_cards.js";

createCards();

const toLocal = () => {
	const btns = document.querySelectorAll(".card__btn");
	console.log(btns);

	let toLocalArr = [];
	btns.forEach((item, i) => {
		item.addEventListener("click", () => {
			toLocalArr.push(i);
			console.log(toLocalArr);
			localStorage.setItem("toLocalArr", toLocalArr);
		});
	});
};

export { toLocal };
