// import { fromLocal } from "./from_local_storage.js";
import { headphones } from "./headphones_array.js";
import { setGetLocalArr } from "./setGetLocalArr.js";
// let fromLocalStorageArr = fromLocal();
let fromLocalStorageArr = JSON.parse(localStorage.getItem("localArr"));
// console.log(fromLocalStorageArr);
// console.log(typeof fromLocalStorageArr);
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
							<span class="main-catalog__num">1wefwe</span>
							<span class="main-catalog__price"> ${headphoneItem.price}</span>
						</div>
						<button class="main-catalog__btn-del">Исключить</button>
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
