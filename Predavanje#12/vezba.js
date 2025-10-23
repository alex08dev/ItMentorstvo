

// Vezba moj nacin
/*
let cars =['Audi','BMW','Mercedes'];


function checkCar(cars,carQuery){

    for (car of cars){
        if(car.toLowerCase() === carQuery.toLowerCase()){
            return true;
        }

}
    return false;
}


checkCar(cars,"BMW");
console.log(checkCar(cars,"Toyota"));
*/


// Vezba skolski nacin
let cars =['Audi','BMW','Mercedes'];

function checkCar(carList,carName){
    for(let name of carList){
        if (name.toLowerCase() === carName.toLowerCase()){
                return true;
        }
    }
    return false;
}

let result = checkCar(cars,"audi");

console.log(result);


let result2 = cars.includes("Audi");
console.log(result2);




















