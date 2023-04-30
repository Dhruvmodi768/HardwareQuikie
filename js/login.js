const loginUser = () => {
	const users = JSON.parse(localStorage.getItem("users"));
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const user = users.find((user) => user.username === username);
	user && user.password === password
		? (window.location.href = "Input.html")
		: alert("Invalid username or password");
};
