let cities = [
    "Svi",
    "Beograd",
    "Subotica",
    "Novi Sad",
    "Sarajevo",
    "Podgorica",
    "Zagreb",
    "Niš",
    "Kragujevac",
    "Banja Luka",
    "Mostar",
    "Tuzla",
    "Split",
    "Rijeka",
    "Osijek",
    "Zadar",
    "Skoplje",
    "Bitola",
    "Tetovo",
    "Ohrid",
    "Tirana",
    "Drač",
    "Shkodër",
    "Sofija",
    "Plovdiv",
    "Varna",
    "Solun",
    "Atina",
    "Ljubljana",
    "Maribor",
    "Temišvar",
    "Kluž-Napoka",
    "Bukurešt",
    "Priština",
    "Peć",
    "Mitrovica",
    "Bar",
    "Herceg Novi",
    "Pula",
    "Dubrovnik",
    "Kotor",
    "Čačak",
    "Leskovac",
    "Pančevo",
    "Vranje",
    "Sombor",
    "Valjevo"
];

let types = [
    "Stanovi",
    "Kuce",
    "Poslovni prostori",
    "Placevi",
    "Garaze/parking"
];

let options = [
    "Garsonjera",
    "Jednosoban stan",
    "Jednoiposoban stan",
    "Dvosoban stan",
    "Dvoiposoban stan",
    "Trosoban stan",
    "Troiposoban stan",
    "Cetvorosoban stan",
    "4.5 i vise soba"
]

let realEstates = [
    {
        city: "Beograd",
        option: "Garsonjera",
        type: "Stanovi",
        price: 99200,
        size: 60
    },
    {
        city: "Novi Sad",
        option: null,
        type: "Kuce",
        price: 120000,
        size: 85
    },
    {
        city: "Niš",
        option: "Dvosoban stan",
        type: "Stanovi",
        price: 75000,
        size: 55
    },
    {
        city: "Beograd",
        option: "Trosoban stan",
        type: "Stanovi",
        price: 88000,
        size: 70
    },
    {
        city: "Subotica",
        option: null,
        type: "Kuce",
        price: 110000,
        size: 95
    },
    {
        city: "Zadar",
        option: "Jednosoban stan",
        type: "Stanovi",
        price: 160000,
        size: 50
    },
    {
        city: "Sarajevo",
        option: "Trosoban stan",
        type: "Stanovi",
        price: 130000,
        size: 78
    },
    {
        city: "Podgorica",
        option: null,
        type: "Garaze/parking",
        price: 18000,
        size: 20
    },
    {
        city: "Podgorica",
        option: null,
        type: "Placevi",
        price: 95000,
        size: 300
    },
    {
        city: "Tirana",
        option: "Jednoiposoban stan",
        type: "Stanovi",
        price: 68000,
        size: 48
    },
    {
        city: "Sofija",
        option: "Dvoiposoban stan",
        type: "Stanovi",
        price: 115000,
        size: 67
    },
    {
        city: "Ljubljana",
        option: "Cetvorosoban stan",
        type: "Stanovi",
        price: 210000,
        size: 95
    }
];


let citiesSelector = document.querySelector("#citiesSelector");
let typesSelector = document.querySelector("#typeSelector");
let roomSelector = document.querySelector("#roomSelector");

for (let type of types) {
    let typeOption = document.createElement("option");
    typeOption.innerHTML = type;

    typesSelector.appendChild(typeOption);
}

for (let city of cities) {
    let cityOption = document.createElement("option");
    cityOption.innerHTML = city;



    // Ako postoji grad za koji nemamo nekretninu dodati atribut disabled
    let cityFound = false;
    let cityCount =0;

    for (let estate of realEstates){
        if(estate.city === city){
            cityFound = true;
            cityCount++;
        }
    }


    if(city === "Svi"){
        cityCount = realEstates.length;
    }
    cityOption.innerHTML += " ("+cityCount+")";") ";
    cityOption.value = city;
    citiesSelector.appendChild(cityOption);
    if(!cityFound && city !=="Svi" ){
        cityOption.setAttribute("disabled", "true");
    }
}


for (let option of options) {
    let optionElement = document.createElement("option");
    optionElement.innerHTML = option;

    roomSelector.appendChild(optionElement);
}

let currentCity = null;
let currentRoom = null;
let currentType = null;




roomSelector.addEventListener("change", function (event) {
    currentRoom = event.target.value;
})

typesSelector.addEventListener("change", function (event) {
    currentType = event.target.value;
})

citiesSelector.addEventListener("change", function (event) {
    currentCity = event.target.value;

    let allEstates = document.getElementsByClassName("realEstate");


    for (let realEstate of allEstates) {

        let estateCity = realEstate.querySelector(".city").textContent;

        realEstate.classList.remove("hidden");

        if(estateCity !== currentCity && currentCity !== "Svi") {
            realEstate.classList.add("hidden");
        }
    }

})




for (let estate of realEstates) {

    let estateHolder = document.createElement("div");
    estateHolder.className = "realEstate";

    let estateTitle = document.createElement("h1");
    estateTitle.textContent = estate.city;
    estateTitle.classList = "city";

    let estateOption = document.createElement("p");
    if(estate.option === null){
        estateOption.textContent = "--";
    } else{
        estateOption.textContent = estate.option;
    }

    let estatePrice = document.createElement("p");
    estatePrice.textContent = estate.price;

    let estateSize = document.createElement("p");
    estateSize.textContent = estate.size;

    estateHolder.append(estateTitle);
    estateHolder.append(estateOption);
    estateHolder.append(estatePrice);
    estateHolder.append(estateSize);

    let allEstates = document.querySelector('#estates');
    allEstates.append(estateHolder);

}






