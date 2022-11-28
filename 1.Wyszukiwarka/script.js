const input = document.querySelector(".search");
const [...items] = document.querySelectorAll("li");

const search = e => {
	const textInput = e.target.value.toLowerCase();

	for (const item of items) {
		if (item.textContent.toLowerCase().indexOf(textInput) === -1) {
			item.style.display = "none";
		} else {
			item.style.display = "block";
		}
	}

	console.log(input.value);
};

input.addEventListener("keyup", search);
