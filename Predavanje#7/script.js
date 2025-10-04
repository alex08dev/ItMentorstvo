
let marqueeElement = document.getElementById("name")

marqueeElement.style.color ="red";
marqueeElement.style.backgroundColor ="black";

// Vezba 1

marqueeElement.innerText = "ACA";

// Vezba 2

let enterName = prompt("What is your name?");
marqueeElement.innerText = enterName;

// Vezba 3 i 4

let enetrColor = prompt("Write the color you would like to be your name.");
let enetrBckgColor = prompt("Write the background color you would like to be in the background.");

marqueeElement.style.color = enetrColor;
marqueeElement.style.backgroundColor = enetrBckgColor;


