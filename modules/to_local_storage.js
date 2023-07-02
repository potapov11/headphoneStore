import { createCards } from "./create_cards.js";
import { getLocalArr } from "./get_local_arr.js";

createCards();

const toLocal = () => {
	const btns = document.querySelectorAll(".card__btn");
	const shopNum = document.querySelector(".header__shop-span");

	let toLocalArr = getLocalArr();
	if (toLocalArr === null) {
		toLocalArr = [];
		console.log(toLocalArr);
	}

	console.log(toLocalArr);
	console.log(typeof toLocalArr);

	btns.forEach((item, i) => {
		item.addEventListener("click", () => {
			shopNum.classList.remove("none");
			toLocalArr.push(i);
			console.log(toLocalArr.length);
			console.log(toLocalArr);
			// toLocalArr = JSON.stringify(toLocalArr);
			localStorage.setItem("toLocalArr", JSON.stringify(toLocalArr));
			// shopNum.textContent = toLocalArr.length;
			console.log(JSON.parse(localStorage.getItem("toLocalArr")));
			console.log(
				JSON.parse(localStorage.getItem("toLocalArr").length) + "length"
			);
			let newArr = JSON.parse(localStorage.getItem("toLocalArr"));
			// newArr = newArr.filter((item) => item !== ",");
			shopNum.textContent = newArr.length;
		});
	});
};

export { toLocal };
