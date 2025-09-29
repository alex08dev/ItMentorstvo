// Array

let products =["hleb","mleko","jogurt"];

console.log(products[1]);

products.push('novine');

console.log(products);
//Vezba
products.shift();
console.log(products);

products.unshift("hleb");
console.log(products);
//Vezba nacin 2
products.splice(0,1);
console.log(products);


let prices =[22.5, 22, 12, 99, 12312,];

prices.splice(2,1);

console.log(prices);


let cars =["BMW", "Audi", "Mercedes"];

console.log(cars);

cars[0] = "zastava";
//Vezba
console.log(cars);

cars.sort();

console.log(cars);

// Objects

let personalID = {
  name:"Aleksandar",
  surname:"Mijatovic",
  dateOfBirth: "08/07/2001",
    hobbies: ["programming", "skiing", "training"]
};

console.log(personalID.name);

// Vezba

personalID.height = "183cm";
console.log(personalID.height);
console.log(personalID);

// Vezba ispsi hobi
console.log(personalID.hobbies[0]);

// Vezba recenica

personalID.sentence = personalID.name + " has gone "+ personalID.hobbies[1];;

console.log(personalID.sentence);

//Domaci

let shop={

    name:"Maxi",
    products:["hleb","mleko","ajvar","jaja","kafa","sok od jabuke","pesto sos"],
    openingHours: "08:00:00",
    closingHours: "22:00:00",
};

console.log(shop);


