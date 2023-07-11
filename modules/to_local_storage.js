import { createCards } from "./create_cards.js";

createCards();
import { setGetLocalArr } from "./setGetLocalArr.js";

const toLocal = () => {
	const btns = document.querySelectorAll(".card__btn");
	const shopNum = document.querySelector(".header__shop-span");
	let fromLocalStorageArr = JSON.parse(localStorage.getItem("localArr"));
	if (fromLocalStorageArr) {
		shopNum.textContent = fromLocalStorageArr.length;
	}
	let toLocalArr = [];
	let shopCount = 0;

	btns.forEach((item, i) => {
		item.addEventListener("click", () => {
			shopCount++;
			shopNum.textContent = shopCount;
			toLocalArr.push(i);
			toLocalArr = setGetLocalArr(toLocalArr);
		});
	});
};

export { toLocal };
