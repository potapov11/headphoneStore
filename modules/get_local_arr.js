function getLocalArr(element) {
	// let newArr = localStorage.getItem("toLocalArr");
	let newArr = JSON.parse(localStorage.getItem("toLocalArr"));
	console.log(newArr);
	if (newArr !== null) {
		// newArr = Array.from(newArr);
		// newArr = newArr.filter((item) => item !== ",");
		if (element) {
			element.classList.remove("none");
			element.textContent = newArr.length;
		}
	}
	console.log(newArr);
	return newArr;
}

export { getLocalArr };
