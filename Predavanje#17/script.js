for (let i = 18; i <= 100; i++) {
  let ageOption = document.createElement("option");
  ageOption.value = i;
  ageOption.textContent = i;
  age.appendChild(ageOption);
}

document
  .getElementById("registerButton")
  .addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;

    if (name.trim() === "" || lastName.trim() === "") {
      alert("Niste uneli sve podatke");
      return;
    }

    register(name, lastName, age);
  });

document.getElementById("delete").addEventListener("click", function () {
  let apiUrl = "https://dummyjson.com/users/" + this.getAttribute("userid");
  fetch(apiUrl, {
    method: "DELETE",
  })
    .then((result) => result.json())
    .then(function (data) {
      console.log(data);
    });
});

function register(name, lastName, age) {
  fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: name,
      lastName: lastName,
      age: age,
    }),
  })
    .then((response) => response.json())
    .then(function (data) {
      let deleteButton = document.getElementById("delete");
      deleteButton.setAttribute("userId", data.id);
      deleteButton.removeAttribute("hidden");
      alert("Uspesno ste se registrovali sa imenom " + data.firstName);
      /* Domaci moj nacin kreiranje dugmeta delete
      let deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = "Delete"
      document.body.append(deleteBtn);
      let id = data.id;
      deleteBtn.addEventListener('click',function(){
        deleteUser(id);
        
      });
      */
    });
}

/* Domaci moj nacin Delete function
function deleteUser(id){
    let url = 'https://dummyjson.com/users/'+id;
    fetch(url,{
        method:'DELETE'
    })

    .then(res =>res.json())
    .then(data =>{
        console.log("User deleted:", data);
    })

}
    */

fetch("https://dummyjson.com/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    username: "emilys",
    password: "emilyspass",
    expiresInMins: 30,
  }),
})
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
  });
