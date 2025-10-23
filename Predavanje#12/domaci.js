

function login(username, password) {

    if(username.toLowerCase() === "admin" && password === "admin") {
       return true;
    }
    return false;


}


let loginInfo = login("admin", "admin");

console.log(loginInfo);