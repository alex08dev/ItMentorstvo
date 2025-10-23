// Vezba 1 Calculate TAX

/*
const calculateTax = (amount,tax) => {

    let taxCalc = tax / 100;

    let taxResult = amount * taxCalc;
    console.log(taxResult);
}

calculateTax(1000,14);
*/
// Skolski nacin

function calculateTax(amount, tax = 0.15){
    return amount+(amount * tax);
}
calculateTax(500,0.2)
calculateTax(500)

function getFullName(firstName, lastName, middleName ='') {
    return firstName +' '+ middleName + ' ' + lastName;
}
let aleksandar = getFullName("Aleksandar","Mijatovic","Mijat")


let smokesTax = calculateTax(500,0.1);
smokesTax = smokesTax * 9;

console.log(smokesTax);

console.log(aleksandar)