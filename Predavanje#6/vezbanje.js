
alert("Dobrodosao na sajt!");

let name = prompt("Upisite vase ime").toLowerCase();
console.log(name)

// Domaci

let names = ["admin", "administrator", "aleksandar"];

if(names.includes(name)){
    alert("Dobrodosao admine!")
} else {
    alert("Nemate pristup sajtu")
}



/*
Kreiraj promenljivu grade koja prima ocenu unetu od strane korisnika putem prompt funkcije,
 a zatim napiši if-else strukturu koja koristi alert da ispise "Excellent" za ocene iznad 90,
 "Good" za ocene između 75 i 90, "Average" za ocene između 50 i 75, i "Fail" za ocene ispod 50.
 */

let grade = Number(prompt("Type your grade grade"));

if(grade >= 90){
    alert("Excellent")
} else if(grade >= 75 && grade < 90){
    alert("Good")
} else if(grade >= 50 & grade < 75){
    alert("Average")
} else {
    alert("Fail")
}



/*
Kreiraj niz shoppingList koji sadrži nekoliko artikala unetih od strane korisnika
 putem prompt funkcije (koristi split(',') da bi razdvojio stvari u nizu),
  a zatim napiši for petlju koja prolazi kroz niz i koristi switch strukturu da
   ispise specifične poruke za određene artikle (npr. "Buy fruits", "Buy vegetables")
    koristeći alert za prikaz poruka.
 */


let shoppingList = [];
let userGroceries = prompt("Type your groceries").toLowerCase();
let groceries = userGroceries.split(",");

shoppingList.push(...groceries);

for(let i = 0; i < shoppingList.length; i++) {

    switch(shoppingList[i]){
        case "jabuka":
            alert("Jabuka je zdrava");
            break;
            case "sir":
                alert("Sir je zdrav");
                break;
                case "nutela":
                    alert("Nutela nije zdrava");
                    break;
    }

}


/*
Kreiraj promenljivu weather koja prima stanje vremena (npr. "sunny", "rainy", "cloudy")
 uneto od strane korisnika putem prompt funkcije, a zatim napiši switch strukturu koja koristi alert da ispise poruku
  kao što je "Wear sunglasses" za "sunny", "Take an umbrella" za "rainy", itd.
 */

let wheatherInput = prompt("What is the weather like today?");

let wheather = wheatherInput;

switch (wheather) {
    case "sunny":
        alert("Wear sunglasses");
        break;
    case "rainy":
        alert("Take an umbrella");
        break;
    case "cloudy":
        alert("It's cloudy maybe you want to take umbrella just in case");
        break;
    default:
        alert("Dress in layers")
}

/*
Kreiraj niz colors koji sadrži nekoliko boja unetih od strane korisnika putem prompt funkcije (koristi split(',')
 da bi razdvojio boje), a zatim napiši for petlju koja prolazi kroz niz i koristi switch strukturu
  da ispise specifične poruke za određene boje (npr. "Red is vibrant", "Blue is calm").

 */

let colorInput = prompt("Type color").toLowerCase().split(",");

let color = colorInput;

for(let i = 0; i < color.length; i++) {
    switch(color[i]) {
        case "red":
            alert("Red is vibrant")
            break;
        case "blue":
            alert("Blue is calm")
            break;
            case "green":
                alert("Green is nature color")
            break;
                default: alert("Every color is nice")
    }
}

/*
Kreiraj promenljivu userName koja prima ime uneto od strane korisnika putem prompt funkcije,
 a zatim napiši if-else strukturu koja koristi alert da ispise "Hello, [userName]!" ako je ime kraće od 5 karaktera,
  a "Welcome, [userName]!" ako je ime duže ili jednako 5 karaktera.
 */

let unsernameInput = prompt("Type unsername").toLowerCase();

let username = unsernameInput;

let usernameLength = username.split("");

console.log(usernameLength);

if (usernameLength.length < 5) {
    alert("Hello " + username + "!");
} else if (usernameLength.length >= 5) {
    alert("Welcome " + username + "!");
}




























