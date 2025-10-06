

// Vezba

let cars = [
    {
        name: "Tesla Model S",
        price: 79999,
        image: "https://images.prismic.io/carwow/a0b54c70-b58c-482c-8d28-b72884380e42_2023+Tesla+Model+S+front+quarter+static.jpg?auto=format&cs=tinysrgb&fit=max&q=60"
    },
    {
        name: "BMW M3",
        price: 69999,
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202009/BMW_M3_Competition__1200x768.jpeg?size=690:388"
    },
    {
        name: "Audi A6",
        price: 55999,
        image: "https://www.chicagomotorcars.com/imagetag/7635/2/l/Used-2014-Audi-S6-40T-Quattro-APR-AMS-TUNED!-600HP-600TQ!-21-SIGNATURE-WHEELS!-1605546741.jpg"
    },
    {
        name: "Mercedes-Benz C-Class",
        price: 61999,
        image: "https://www.topgear.com/sites/default/files/2021/11/Mercedes_C300D_0000.jpg"
    },
    {
        name: "Ford Mustang",
        price: 45999,
        image: "https://cdn.motor1.com/images/mgl/LRAQQ/s1/2019-ford-mustang-shelby-gt350.webp"
    },
    {
        name: "Chevrolet Camaro",
        price: 42999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA9P7OHS8yk2_FI2jLPK4LYHg_YNwKbLCc8Q&s"
    },
    {
        name: "Toyota Supra",
        price: 50999,
        image: "https://www.autoexclusive.rs/storage/posts/seo/2022/Oct/129017/befunky-collage-2.jpg"
    },
    {
        name: "Porsche 911",
        price: 119999,
        image: "https://www.supercarclub.pl/wp-content/uploads/2021/11/Porsche-911-992-TurboS.jpg"
    }
];


// Vezba moj nacin



for(let i = 0; i < cars.length; i++){
    let div = document.createElement("div");
    div.className = "carCard";
    let image = document.createElement("img");
    image.style.maxWidth = "300px";
    image.style.maxHeight = "300px";
    image.src = cars[i].image;
    let paragraph = document.createElement("p");
    paragraph.style.color = "black";
    let span = document.createElement("span");
    if(cars[i].price > 50000){
        span.style.color = "red";
    } else{
        span.style.color = "green";
    }

    paragraph.innerText = cars[i].name + " ";
    span.innerText = cars[i].price;

    paragraph.appendChild(span);

    div.appendChild(image);
    div.appendChild(paragraph);

    document.body.appendChild(div);
}


// Skolski nacin

/*

for (let car of cars) {
    let carDiv = document.createElement("div");
    let carImage = document.createElement("img");
    carImage.src = car.image;
    let carName = document.createElement("p");
    carName.textContent = car.name;
    let price = document.createElement("span");
    price.textContent = car.price;

    carName.append(price);
    carDiv.append(carImage);
    carDiv.append(carName);

    document.querySelector("#main").append(carDiv);
    //document.querySelector("#main").innerHTML +="<div><img src='"+car.image+"'> <p>"+ car.name+"<span className='productPrice'> "+car.price+"</span></p></div>";
}

*/
