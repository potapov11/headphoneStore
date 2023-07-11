import { headphones } from "./headphones_array.js";

const hedphonesBox = document.querySelector(".box");
console.log(hedphonesBox);

const createCards = () => {
	headphones.forEach((item, i) => {
		const card = document.createElement("div");
		card.classList.add("card");
		card.innerHTML = `
			<img class="card__img" src="${item.img}"></img>
			<div class="card__inner-info">
				<p class="card__title">${item.title}</p>
				<span class="card__price">${item.price} &#x20bd</span>
				<span class="card__rating">${item.rating}</span>
				<button class="card__btn" type="button">Купить</button>
			</div>
    `;
		card.setAttribute("data", `${i}`);
		hedphonesBox.appendChild(card);

		// const shopIcon = document.querySelector(".header__shop-img");
		// console.log(shopIcon);
		// let fromLocalStorageArr = JSON.parse(localStorage.getItem("localArr"));
		// console.log(fromLocalStorageArr);
		// console.log(fromLocalStorageArr.length);
		// shopIcon.textContent = fromLocalStorageArr.length;
	});
};

export { createCards };
