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

// Dodatne vezbe

/*
Kreiraj niz numbers sa nekoliko brojeva, a zatim napiši petlju koja prolazi kroz sve brojeve
 i koristi if-else strukturu da ispise "Even" za parne i "Odd" za neparne brojeve
 .*/

let numbers = [1, 12, 29, 46, 21,52, 24, 53];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 0) {
        console.log(numbers[i] +" is Even number");
    } else {
        console.log(numbers[i] + " is Odd number");
    }
}

/*
Kreiraj objekat car sa svojstvima make, model, year, i color,
a zatim napiši for-in petlju koja prolazi kroz sva svojstva objekta i koristi
switch strukturu da ispisuje poruke specifične za svako svojstvo (npr. "Make: Toyota", "Model: Corolla").
 .*/

let car ={
    make: "Toyota",
    model: "Auris",
    year: "2012",
    color:"white"
}

for (let key in car) {
    switch(key) {
        case "make":
            console.log(`Make: ${car[key]}`);
            break;
            case "model":
            console.log(`Model: ${car[key]}`);
            break;
            case "year":
            console.log(`Year: ${car[key]}`);
            break;
            case "color":
            console.log(`Color: ${car[key]}`);
            break;
    }
}


/*

Kreiraj niz students koji sadrži objekte sa svojstvima name i grade,
 a zatim napiši for petlju koja prolazi kroz niz i koristi if-else strukturu
 da ispise "Pass" za ocene 50 i više, i "Fail" za ocene ispod 50.

 */

let students = [
    { name:"Sara", grade: 49},
    { name:"Noa", grade: 90},
    { name:"Nick", grade: 36},
    { name:"John", grade: 100},
];

for(let i = 0; i < students.length; i++) {
    if(students[i].grade < 50){
        console.log(students[i].name +" has fallen the test with "+ students[i].grade +" points");
    } else if(students[i].grade > 50){
        console.log(students[i].name+ " has passed the test with "+ students[i].grade +" points");
    }
}


/*
*
*Kreiraj niz grades koji sadrži ocene učenika,
* a zatim napiši petlju koja prolazi kroz niz i koristi if-else strukturu da ispise "Excellent"
* za ocene iznad 90, "Good" za ocene između 75 i 90, "Average" za ocene između 50 i 75, i "Fail" za ocene ispod 50.
*
* */

let grades = [20,80,99,21,51,43,89,56,91];

for(let i = 0; i<grades.length; i++) {

    if(grades[i] > 90){
        console.log("Excellent");
    } else if(grades[i] > 75 && grades[i] <= 90){
        console.log("Good");
    } else if(grades[i] <= 75 && grades[i] >= 50){
        console.log("Average");
    } else{
        console.log("Fail");
    }
}

/*
Kreiraj niz fruits sa nekoliko različitih voća,
a zatim napiši petlju koja prolazi kroz niz i koristi switch strukturu da
ispise boju svakog voća (npr. "Apple is red", "Banana is yellow").

 */

let fruits = ["apple", "banana", "orange", "pear", "grape"];

for(let i = 0; i < fruits.length; i++) {

    switch(fruits[i]){
        case "apple":
            console.log("Apple is red");
            break;
            case "banana":
                console.log("Banana is yellow");
                break;
                case "orange":
                    console.log("Orange is orange");
                    break;
                    case "pear":
                        console.log("Pear is green")
                        break
                            case "grape":
                                console.log("Grape is purple");
                                break;
    }

}

/*
Kreiraj objekat book sa svojstvima title, author, year, i genre,
a zatim napiši for-in petlju koja prolazi kroz sva svojstva objekta i koristi if-else strukturu
da ispise poruku "Old book" ako je godina izdanja pre 2000, inače "New book".
 */

let book = {
    title: "Harry Potter",
    author: "J. K. Rowling",
    year: "1995",
    genre:"Fantasy"
}

for(let key in book) {
    if(book[key] === book.year ){
        if(book.year < 2000){
            console.log("Old Book")
        } else if(book.year > 2000){
            console.log("New Book")
        }
    }
}

/*
Kreiraj niz employees koji sadrži objekte sa svojstvima name i salary,
 a zatim napiši for petlju koja prolazi kroz niz i koristi if-else strukturu
  da ispise "High salary" za plate iznad 50000, "Medium salary"
  za plate između 30000 i 50000, i "Low salary" za plate ispod 30000.
 */

let employees =[
    {
        name:"John",
        salary:29800
    },
    {
        name:"Mark",
        salary:49800
    },
    {
        name:"Sarah",
        salary:132000
    },
    {
        name:"Mat",
        salary:59000
    }
]


for(let i =0; i<employees.length; i++) {
    if(employees[i].salary > 50000){
        console.log(employees[i].name +" has a High salary")
    } else if(employees[i].salary >= 30000 && employees[i].salary <= 50000){
        console.log(employees[i].name +" has a Medium salary")
    } else {
        console.log(employees[i].name +" has a Low salary")
    }
}



/*
Kreiraj niz cities sa nekoliko imena gradova,
 a zatim napiši petlju koja prolazi kroz niz i koristi switch strukturu da ispise poruku specifičnu
  za svaki grad (npr. "Welcome to New York", "Welcome to Los Angeles").
 */

let cities = ["Los Angeles", "Paris", "Rome", "Belgrade","Berlin","Stockholm"];

for(let i = 0; i < cities.length; i++) {
    switch(cities[i]){
        case cities[i]:
            console.log("Welcome to " + cities[i]);
            break;
    }
}


