const signUpUser = () => {
	// Get all the users from localStorage
	let users = JSON.parse(localStorage.getItem("users")) || [];
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const confirmPassword = document.getElementById("confirmPassword").value;

	if (username.indexOf(" ") >= 0) {
		alert("Username cannot contain whitespace");
		return;
	}
	if (username?.length <= 6) {
		alert("Please enter a username greater than 6 digits");
		return;
	}
	if (password !== confirmPassword) {
		alert("Passwords do not match");
		return;
	}

	// Find the user from all the available users
	const user = users && users.find((user) => user.username === username);

	if (user) {
		alert("User already exists! Please login");
		return false;
	} else {
		users.push({
			id: window.crypto.randomUUID(),
			username,
			password,
		});
		localStorage.setItem("users", JSON.stringify(users));
	}
	window.location.href = "Input.html";
};
