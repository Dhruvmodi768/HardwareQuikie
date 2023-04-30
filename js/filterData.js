const paintData = (data) => {
	data.length > 0 &&
		data.forEach((d) => {
			const titleText = document.querySelector(".titleText");
			const card = document.createElement("div");
			card.className = "card";
			card.innerHTML = `
        <ul>
            <li>CPU: ${d.config.cpu}</li>
            <li>GPU: ${d.config.gpu}</li>
            <li>HDD: ${d.config.hdd}</li>
            <li>RAM: ${d.config.ram}</li>
        </ul>
            `;
			titleText.style.display = "block";
			document.getElementById("filteredData").appendChild(card);
		});
};

const filterData = (value) => {
	if (value <= 0 || value === "" || value === null || value > 165000) {
		alert("Please enter a valid budget");
		return;
	}
	if (value < 30000 || value > 165000) {
		alert("Please enter a value between 30000 and 165000 only!");
		return;
	}
	let configData = localStorage.getItem("configData");
	configData = configData && JSON.parse(configData);
	if (configData) {
		const renderData = configData.filter((data) => {
			const price = data.price.replaceAll(",", "");
			const minPrice = price - 10000;
			const maxPrice = price + 10000;
			return price === value || (value >= minPrice && value <= maxPrice);
		});
		paintData(renderData);
	} else {
		return [];
	}
};

window.onload = () => {
	const userInput = document.querySelector("#budget");
	userInput.addEventListener("change", function (event) {
		event.target.value ? filterData(event.target.value) : null;
	});
};
