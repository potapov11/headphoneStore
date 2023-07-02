function setGetLocalArr(array) {
	localStorage.setItem("localArr", JSON.stringify(array));
	array = JSON.parse(localStorage.getItem("localArr"));
	return array;
}

export { setGetLocalArr };
