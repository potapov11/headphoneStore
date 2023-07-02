import { createCards } from "./create_cards.js";
// import { getLocalArr } from "./get_local_arr.js";

createCards();
import { setGetLocalArr } from "./setGetLocalArr.js";

const toLocal = () => {
	const btns = document.querySelectorAll(".card__btn");
	const shopNum = document.querySelector(".header__shop-span");

	let toLocalArr = [];

	console.log(toLocalArr);
	console.log(typeof toLocalArr);

	btns.forEach((item, i) => {
		item.addEventListener("click", () => {
			shopNum.classList.remove("none");
			console.log(toLocalArr);
			console.log(typeof toLocalArr);
			toLocalArr.push(i);
			console.log(toLocalArr.length);
			console.log(toLocalArr);
			console.log(typeof toLocalArr);

			toLocalArr = setGetLocalArr(toLocalArr);
			console.log(toLocalArr);
			console.log(typeof toLocalArr);
		});
	});
};

export { toLocal };
