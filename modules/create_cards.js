import { headphones } from "./headphones_array.js";
const hedphonesBox = document.querySelector(".box");

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
	});
};

export { createCards };
