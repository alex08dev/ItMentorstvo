let cars = [
    {
        name: "Tesla Model S",
        price: 79999,
        year: 2023,
        image: "https://images.prismic.io/carwow/a0b54c70-b58c-482c-8d28-b72884380e42_2023+Tesla+Model+S+front+quarter+static.jpg?auto=format&cs=tinysrgb&fit=max&q=60"
    },
    {
        name: "BMW M3",
        price: 69999,
        year: 2021,
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202009/BMW_M3_Competition__1200x768.jpeg?size=690:388"
    },
    {
        name: "Audi A6",
        price: 55999,
        year: 2020,
        image: "https://www.chicagomotorcars.com/imagetag/7635/2/l/Used-2014-Audi-S6-40T-Quattro-APR-AMS-TUNED!-600HP-600TQ!-21-SIGNATURE-WHEELS!-1605546741.jpg"
    },
    {
        name: "Mercedes-Benz C-Class",
        price: 61999,
        year: 2022,
        image: "https://www.topgear.com/sites/default/files/2021/11/Mercedes_C300D_0000.jpg"
    },
    {
        name: "Ford Mustang",
        price: 45999,
        year: 2019,
        image: "https://cdn.motor1.com/images/mgl/LRAQQ/s1/2019-ford-mustang-shelby-gt350.webp"
    },
    {
        name: "Chevrolet Camaro",
        price: 42999,
        year: 2018,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA9P7OHS8yk2_FI2jLPK4LYHg_YNwKbLCc8Q&s"
    },
    {
        name: "Toyota Supra",
        price: 50999,
        year: 2025,
        image: "https://www.autoexclusive.rs/storage/posts/seo/2022/Oct/129017/befunky-collage-2.jpg"
    },
    {
        name: "Porsche 911",
        price: 119999,
        year: 2025,
        image: "https://www.supercarclub.pl/wp-content/uploads/2021/11/Porsche-911-992-TurboS.jpg"
    },
    // Novi dodati automobili
    {
        name: "Lamborghini Huracan",
        price: 199999,
        year: 2025,
        image: "https://static.independent.co.uk/2022/09/30/11/Image.jpeg"
    },
    {
        name: "Nissan GT-R",
        price: 99999,
        year: 2020,
        image: "https://cdn.dealeraccelerate.com/bagauction/15/2707/118616/1920x1440/2021-nissan-gt-r-nismo"
    },
    {
        name: "Hyundai Ioniq 6",
        price: 45999,
        year: 2025,
        image: "https://media.ed.edmunds-media.com/hyundai/ioniq-6/2025/oem/2025_hyundai_ioniq-6_sedan_limited_fq_oem_1_1600.jpg"
    },
    {
        name: "Volkswagen Golf GTI",
        price: 37999,
        year: 2019,
        image: "https://hips.hearstapps.com/hmg-prod/images/2025-volkswagen-golf-gti-autobahn-586-688d0ac683047.jpg?crop=0.654xw:0.551xh;0.299xw,0.354xh&resize=1200:*"
    }
];


for(let car of cars){

    // Kreiramo potrebne elemente i dodeljujemo ih Divu
    let carDiv = document.createElement("div");
    carDiv.className = "carDiv";
    let carImg = document.createElement("img");
    carImg.src = car.image;
    carImg.className = "carImage";
    let carName = document.createElement("p");
    carName.textContent = car.name +" - ";
    let carPrice = document.createElement("span");
    carPrice.textContent = car.price +" €";
    let carYear = document.createElement("p");
    carYear.textContent = car.year;
    let newCarTag = document.createElement("p");
    newCarTag.className = "carTag";
    let identifiePriceTag = document.createElement("p");
    carName.appendChild(carPrice);
    carDiv.appendChild(carImg);
    carDiv.appendChild(carName);
    carDiv.appendChild(carYear);


    // Da li je auto nov
    if( parseInt(carYear.textContent) === 2025){
        newCarTag.textContent = "New";
        carDiv.appendChild(newCarTag);
    }

    // Dodatak da li je auto jeftin ili premium
    if(parseInt(carPrice.textContent) < 50000) {
        identifiePriceTag.textContent = "Low Price!";
        identifiePriceTag.className = "lowPrice";
        carDiv.appendChild(identifiePriceTag);
    } else if(parseInt(carPrice.textContent) >= 100000) {
        identifiePriceTag.textContent = "Exclusive!";
        identifiePriceTag.className = "exclusivePrice";
        carDiv.appendChild(identifiePriceTag);
    }


    document.querySelector("#main").appendChild(carDiv);
}