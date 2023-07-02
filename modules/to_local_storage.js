import { createCards } from "./create_cards.js";
import { getLocalArr } from "./get_local_arr.js";

createCards();

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

			toLocalArr = setLocalArr(toLocalArr);
			console.log(toLocalArr);
			console.log(typeof toLocalArr);
		});
	});
};

function setLocalArr(array) {
	// array = JSON.parse(array);
	// localStorage.setItem(array);
	localStorage.setItem("localArr", JSON.stringify(array));
	array = JSON.parse(localStorage.getItem("localArr"));
	return array;
}

export { toLocal };
