import { headphones } from "./headphones_array.js";
let fromLocalStorageArr = JSON.parse(localStorage.getItem("localArr"));
console.log(fromLocalStorageArr);
const catalogBox = document.querySelector(".main-catalog__box");
console.log(catalogBox);

function createCatCards() {
	const createCatalogCards = (array) => {
		console.log(array);
		array.forEach((item, i) => {
			headphones.forEach((headphoneItem) => {
				console.log(typeof headphoneItem);
				if (item === headphoneItem.id) {
					console.log("равно");
					const card = document.createElement("div");
					card.classList.add("main-catalog__card");
					card.innerHTML = `
						<img class="main-catalog__img" src="${headphoneItem.img}"></img>
						<div class = 'main-catalog__card-inner'>
							<p class="main-catalog__title">${headphoneItem.title}</p>
						</div>
						<div class = 'main-catalog__card-bottom'>
							<span class="main-catalog__num none">1wefwe</span>
							<div>
								<span class="main-catalog__price"> ${headphoneItem.price}</span>
								<span class="main-catalog__price-icon"> ₽</span>
							</div>
						</div>
						<button class="main-catalog__btn-del"></button>
				`;
					card.setAttribute("data", `${headphoneItem.id}`);
					catalogBox.appendChild(card);
				}
			});
		});
	};
	createCatalogCards(fromLocalStorageArr);
}

export { createCatCards };
