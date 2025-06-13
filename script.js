const user = document.getElementById("username");
const pass = document.getElementById("password");
const remember = document.getElementById("checkbox");
const submit = document.getElementById("submit");
const exist = document.getElementById("existing");

if(localStorage.getItem("username")){
	exist.style.visibility = "visible";
}
exist.addEventListener("click", (e) => {
	e.preventDefault();
	const user1 = localStorage.getItem("username");
	alert(`Logged in as ${user1}`);
})
submit.addEventListener("click", (e) => {
	e.preventDefault();
	alert(`Logged in as ${user.value}`);
	if(remember.checked){
		localStorage.setItem("Username", user.value);
		localStorage.setItem("Password", pass.value);
	}else{
		localStorage.clear();
	}
})
