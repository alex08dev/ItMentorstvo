
// Vezba 1

let name = "admin";

if(name == "admin"){
    console.log("Pozdrav admine")
} else {
    console.log("Niste administrator")
};

// Vezba 2

let password = "tajnaSifra";

if(password == "tajnaSifra"){
    console.log("Uneli ste tacnu sifru")
} else{
    console.log("Sifra nije tacna")
};

// Vezba 3

if(name == "admin" && password == "tajnaSifra"){
    console.log("Uneli ste tacno ime i lozinku")
} else{
    console.log("Pogresno ime ili lozinka");
};


// Vezba 4

let userType = "admin";

if(userType == "admin" || userType == "moderator") {
    console.log("Vi ste administrator")
} else{
    console.log("Vi ste obican clan");
};

//------------------------------------------------------

// Vezba moj nacin

let allowedTypes = ["admin", "moderator"];

if(allowedTypes.includes(userType)){
    console.log("Vi ste administrator")
}else{
    console.log("Vi ste obican clan")
}
// Skolski nacin

let typeCheck = allowedTypes.includes(userType);

if(typeCheck) {
    console.log("2. Vi ste administrator")
} else {
    console.log("2. Vi niste ste administrator")
}

// Vezba

let dayOfTheWeek = "ponedeljak";

if(dayOfTheWeek == "subota" || dayOfTheWeek == "nedelja"){
    console.log("Weekend!")
}else if(dayOfTheWeek == "petak"){
    console.log("Weekend is comming!")
} else{
    console.log("Work work...")
};

