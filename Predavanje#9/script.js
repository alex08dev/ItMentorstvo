// Vezba 1

let cities = [
    "Beograd",
    "Subotica",
    "Novi Sad",
    "Podgorica",
    "Zagreb",
    "Sarajevo",
    "Banja Luka",
    "Mostar",
    "Tuzla",
    "Niš",
    "Kragujevac",
    "Leskovac",
    "Skoplje",
    "Bitola",
    "Tetovo",
    "Priština",
    "Drač",
    "Ljubljana",
    "Maribor",
    "Sofija",
    "Plovdiv",
    "Varna",
    "Solun",
    "Patras"
];

let types = [
    "Stanovi",
    "Kuce",
    "Poslovni prostori",
    "Placevi",
    "Garaze/parking",
    "Loft",
    "Attic",
    "Penthouse"
];

let rooms = [
    "Garsonjera",
    "Jednosoban stan",
    "Jednoiposoban stan",
    "Dvosoban stan",
    "Dvoiposoban stan",
    "Trosovan stan",
    "Troiposoban stan",
    "Cetvorosoban stan",
    "4.5 i vise soba"
];

let realEstates = [
    {
        city: "Beograd",
        option: "Garsonjera",
        type: "Stanovi",
        price: 48200,
        size: 25
    },
    {
        city: "Novi Sad",
        option: null,
        type: "Kuce",
        price: 12200,
        size: 85
    },
    {
        city: "Zagreb",
        option: "Dvosoban stan",
        type: "Stanovi",
        price: 75000,
        size: 65
    },
    {
        city: "Sarajevo",
        option: "Jednosoban stan",
        type: "Stanovi",
        price: 54000,
        size: 40
    },
    {
        city: "Skoplje",
        option: "Trosovan stan",
        type: "Stanovi",
        price: 67000,
        size: 78
    },
    {
        city: "Podgorica",
        option: "Dvoiposoban stan",
        type: "Kuce",
        price: 110000,
        size: 95
    },
    {
        city: "Sofija",
        option: "Jednoiposoban stan",
        type: "Loft",
        price: 60000,
        size: 52
    },
    {
        city: "Solun",
        option: "Cetvorosoban stan",
        type: "Penthouse",
        price: 200000,
        size: 140
    },
    {
        city: "Varna",
        option: "Troiposoban stan",
        type: "Poslovni prostori",
        price: 95000,
        size: 90
    },
    {
        city: "Niš",
        option: "Garsonjera",
        type: "Garaze/parking",
        price: 15000,
        size: 18
    },
    {
        city: "Banja Luka",
        option: "4.5 i vise soba",
        type: "Placevi",
        price: 125000,
        size: 160
    },
    {
        city: "Maribor",
        option: "Jednosoban stan",
        type: "Stanovi",
        price: 43000,
        size: 35
    }
];



let citiesSelector = document.querySelector("#selectItem");

for (city in cities) {

    let grad = document.createElement("option");
    grad.textContent = cities[city];

    citiesSelector.appendChild(grad);

}

// Skolski nacin vezba 1

/*
let citiesSelector = document.querySelector("#selectItem");
console.log(cities);

for(let city of cities) {
    let cityOption = document.createElement("option");
    cityOption.innerHTML = city;

    citiesSelector.appendChild(cityOption);

}

*/

// Vezba 2

/*

let form = document.querySelector("#formBlock");

let apartmentType = document.createElement("select");
apartmentType.id = "apartmentType";

for (let apartment of apartments) {

    let apartmentOption = document.createElement("option");
    apartmentOption.textContent = apartment;

    apartmentType.appendChild(apartmentOption);
}

let numOfRooms = document.createElement("select");
numOfRooms.id = "roomsNumber";

for (room of rooms) {
    let roomOption = document.createElement("option");
    roomOption.innerHTML = room;
    numOfRooms.appendChild(roomOption);
}


form.appendChild(apartmentType);
form.appendChild(numOfRooms);

 */


// Skolski nacin je isti samo su select elementi kreirani u html a ovde pomocu js-a

let typeSelector = document.getElementById("typeSelector");
let roomSelector = document.getElementById("roomSelector");

for (type of types) {

    let typeOption = document.createElement("option");
    typeOption.innerHTML = type;

    typeSelector.appendChild(typeOption);

}

for (room of rooms) {

    let roomOption = document.createElement("option");
    roomOption.innerHTML = room;

    roomSelector.appendChild(roomOption);

}


// Vezba 3,4,5,6

let targetedCity;
let targetedRoom;
let targetedType;

typeSelector.addEventListener("change", function (event) {
    targetedType = event.target.value;
})

roomSelector.addEventListener("change", function (event) {
    targetedRoom = event.currentTarget.value;
});

citiesSelector.addEventListener("change", function (event) {

    targetedCity = event.currentTarget.value

});

document.querySelector("#searchProperitesButton").addEventListener("click", function () {
    console.log(targetedCity);
    console.log(targetedRoom);
    console.log(targetedType);
});


for (let estate of realEstates) {
    console.log(estate.type);
}

// Domaci zadatak

let estateDiv = document.querySelector("#estate");

for (let estate of realEstates) {

    let realEstateName = document.createElement("h1");
    realEstateName = estate.type+ " "+ estate.city;
    let realEstateOption = document.createElement("p");
    if (estate.option == null) {
        realEstateOption.textContent = "--";
    } else{
        realEstateOption.textContent = estate.option;
    }

    let realEstatePrice = document.createElement("p");
    realEstatePrice.textContent = estate.price;
    let realEstateSize = document.createElement("p");
    realEstateSize.textContent = estate.size;

    let estateCard = document.createElement("div");
    estateCard.id = "estateCard";

    estateCard.append(realEstateName);
    estateCard.append(realEstateOption);
    estateCard.append(realEstatePrice);
    estateCard.append(realEstateSize);

    estateDiv.appendChild(estateCard);
}























