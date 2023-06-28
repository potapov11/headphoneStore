import { headphones } from "./headphones_array.js";
const hedphonesBox = document.querySelector(".box");

const createCards = () => {
	headphones.forEach((item, i) => {
		const card = document.createElement("div");
		card.classList.add("card");
		card.innerHTML = `
      <h2 class="card__title">${item.title}</h2>
      <img class="card__img" src="${item.img}"></img>
      <span class="card__price">${item.price}</span>
      <button class="card__btn">Купить</button>
    `;
		card.setAttribute("data", `${i}`);
		hedphonesBox.appendChild(card);
	});
};

export { createCards };
