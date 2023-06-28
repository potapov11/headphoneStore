const fromLocal = () => {
	const fromLocalStorageArr = localStorage.getItem("toLocalArr");
	console.log(fromLocalStorageArr);
	return fromLocalStorageArr;
};

export { fromLocal };
