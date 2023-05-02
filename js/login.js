document.getElementById("password").addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		loginUser();
	}
});

const loginUser = () => {
	const users = JSON.parse(localStorage.getItem("users"));
	console.log(users)
	if(users === null){
		alert("No user found please sign up");
		return;
	}
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const user = users.find((user) => user.username === username);
	user && user.password === password
		? (window.location.href = "Input.html")
		: alert("Invalid username or password");
};
