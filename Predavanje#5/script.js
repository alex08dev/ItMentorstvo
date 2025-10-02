
// Vezba 1
// Greska je u prvom velikom slovu, mozemo da resimo ako stavimo toLowerCase na varijablu name u uslovu

let name ="admin";


if (name.toLocaleLowerCase() == "admin") {
    console.log("Pozdrav admine!");
} else {
    console.log("Vi niste administratr");
}

// Vezba 2

let ime = 'aleksandar';
ime = ime.toLocaleLowerCase();

if(ime[0] == "a") {
    console.log("ime pocinje samoglasnikom");
} else {
    console.log("ime NE pocinje samoglasnikom");
}

// Vezba 3 moj nacin

name.toLocaleLowerCase();
switch(name[0]) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("IME pocinje samoglasnikom")
        break;
        default:console.log("IME ne pocinje samoglasnikom");

}

// Vezba 3 moj nacin sa koriscenjem array-a


let samoglasnici = ["a", "e", "i", "o", "u"];

if(samoglasnici.includes(name[0])) {
    console.log("Name pocinje samoglasnikom");
} else{
    console.log("Name ne pocinje samoglasnikom");
}

//---------------------------------------------------------

let number = 2;

if(number === 2) {
    console.log("Broj je 2");
} else {
    console.log("Broj nije 2");
}


// Petlje

let cars = [
    "Toyota", "Honda", "Ford", "Chevrolet", "Mercedes-Benz",
    "BMW", "Audi", "Volkswagen", "Hyundai", "Kia",
    "Nissan", "Mazda", "Subaru", "Lexus", "Jeep",
    "Dodge", "Chrysler", "Buick", "Cadillac", "GMC",
    "Volvo", "Peugeot", "Renault", "Fiat", "Alfa Romeo",
    "Citroën", "Opel", "Skoda", "Seat", "Mini",
    "Porsche", "Ferrari", "Lamborghini", "Maserati", "Bentley",
    "Rolls-Royce", "Aston Martin", "Tesla", "Lucid", "Rivian",
    "Bugatti", "McLaren", "Pagani", "Suzuki", "Isuzu",
    "Saab", "Acura", "Infiniti", "Genesis", "Lincoln"
];


// for petlja
//Vezba

for(let i = 0; i <cars.length; i++) {
    console.log(cars[i]);
}



// Domaci moj nacin

for(let i = 0; i <cars.length; i++) {

    if(cars[i].charAt(0).toLowerCase() === "a") {
        continue;
    } else {
        console.log(cars[i]);
    }

}

// Domaci skolski nacin

for(let i = 0; i <cars.length; i++) {

    let firstLetter = cars[i][0].toLowerCase();

    if(firstLetter === "a") {
        continue;
    }
    console.log(cars[i]);

}











