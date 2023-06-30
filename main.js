import { toLocal } from "./modules/to_local_storage.js";
toLocal();

const shopNum = document.querySelector(".header__shop-span");
console.log(shopNum);
function getLocalArr() {
	let newArr = Array.from(localStorage.getItem("toLocalArr"));
	if (newArr) {
		newArr = newArr.filter((item) => item !== ",");
		shopNum.classList.remove("none");
		shopNum.textContent = newArr.length;
	}
}
