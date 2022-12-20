const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const error = document.querySelector(".error");
const cost = document.querySelector(".cost");
const costInfo = document.querySelector(".cost-info");
const countBtn = document.querySelector(".count");

const count = () => {
	const priceValue = Number(price.value);
	const peopleValue = Number(people.value);
	const tipValue = Number(tip.value);
	console.log(priceValue, peopleValue, tipValue);

	const priceToPay = (priceValue + priceValue * tipValue) / peopleValue;

	error.textContent = "";
	costInfo.style.display = "block";
	cost.textContent = priceToPay.toFixed(2);
};

const checkInputs = () => {
	if (price.value === "" || people.value === "" || tip.value === "0") {
		error.textContent = "Wypełnij wszystkie pola!";
	} else {
		count();
	}
};

countBtn.addEventListener("click", checkInputs);
