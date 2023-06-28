import { fromLocal } from "./from_local_storage.js";
import { headphones } from "./headphones_array.js";
let fromLocalStorageArr = Array.from(fromLocal());
fromLocalStorageArr = fromLocalStorageArr.filter((item) => item !== ",");
const catalogBox = document.querySelector(".catalog_box");
console.log(fromLocalStorageArr);
console.log(typeof fromLocalStorageArr);

function createCatCards() {
	const createCatalogCards = (array) => {
		array.forEach((item, i) => {
			headphones.forEach((headphoneItem) => {
				if (+item === headphoneItem.id) {
					console.log("равно");
					const card = document.createElement("div");
					card.classList.add("card");
					card.innerHTML = `
			  <h2 class="card__title">${headphoneItem.title}</h2>
			  <img class="card__img" src="${headphoneItem.img}"></img>
			  <span class="card__price">${headphoneItem.price}</span>
			  <button class="card__btn">Исключить</button>
			`;
					card.setAttribute("data", `${i}`);
					catalogBox.appendChild(card);
				}
			});
			// console.log(item);{
			//   if(item )
			// };
		});
	};
	createCatalogCards(fromLocalStorageArr);
}

export { createCatCards };
