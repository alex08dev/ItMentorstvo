const loggedIn = localStorage.getItem("loggedIn");

if (loggedIn === null) {
    document.getElementById("form").style.display = "block";
} else{

    document.getElementById("loggedInData").style.display = "block";

}

document.getElementById("logoutBtn").addEventListener("click", function(){

    localStorage.removeItem("loggedIn");
    window.location.reload();
})

let button = document.getElementById("loginBtn");


button.addEventListener("click", function () {
    const username = document.getElementById("username").value.toLowerCase();
    const password =  document.getElementById("password").value.toLowerCase();

    if (username !== "admin" || password !== "123456") {
        return alert("Please enter a valid username");

    }

    localStorage.setItem("loggedIn", true);
    window.location.reload();
})