

let dayOfTheWeek = "Friday";

switch(dayOfTheWeek) {
    case "Saturday":
        console.log("It is weekend!")
        break;
        case "Sunday":
            console.log("It is weekend!")
            break;

            case "Monday":
                console.log("Work work...")
                break;
    case "Tuesday":
        console.log("Work work...")
        break;
    case "Wednesday":
        console.log("Work work...")
        break;
    case "Thursday":
        console.log("Work work...")
        break;
    case "Friday":
        console.log("Weekend is comming!")
        break;
}
// Resenje skolski

switch (dayOfTheWeek) {

    case "Sunday":
    case "Saturday":
        console.log("It is weekend!");
        break;
        case "Friday":
            console.log("Weekend is comming!");
            break;
            default:
                console.log("Work work...")
}

// Dodatne vezbe

let temperature = 18;

if (temperature < 15) {
    console.log("It's cold")
} else if (temperature >= 15 && temperature <= 25) {
    console.log("It's okay")
}else{
    console.log("It's Hot")
}
//-------------------------------------------------------

let dobaDana = "jutro";

if (dobaDana === "jutro") {
    console.log("Dobro jutro")
}else if(dobaDana === "popodne") {
    console.log("Dobar dan")
} else if (dobaDana === "vece") {
    console.log("Dobro vece")
}

//--------------------------------------------------------

let godineRada = 12;

if (godineRada < 2) {
    console.log("Pocetnik")
} else if (godineRada >= 2 && godineRada <= 5) {
    console.log("Iskusan radnik")
} else if (godineRada > 5) {
    console.log("Veteran")
}

//-----------------------------------------------------------

let age = 24;

if(age < 12) {
    console.log("Child")
} else if(age >= 12 && age <= 18) {
    console.log("Teen")
} else (
    console.log("Adult")
)

//--------------------------------------------------------

let score = 76;

if (score < 50) {
    console.log("Fail")
} else if(score >= 50 && score <= 75) {
    console.log("Pass")
} else{
    console.log("Excellent")
}















