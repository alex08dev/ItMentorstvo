

let ads =[
    {
        title:"Skoda octavia 2014",
        price: 9950,
        image:"https://imgd.aeplcdn.com/642x336/cw/cars/skoda/octavia.jpg?q=80"
    },
    {
        title:"Audi A4",
        price: 8000,
        image:"https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.automagazin.rs%2Fpredstavljamo%2F19049%2Faudi-a4-2020-jos-vise-sportski-i-tehnoloski-napredan-&psig=AOvVaw0M5FAANB5Pw9VGKGbA3qwu&ust=1759671910682000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIiP9uvWipADFQAAAAAdAAAAABAE"
    }
];

// Domaci moj nacin

let div = document.getElementById("products");
div.style.border="1px solid black";



for (let i =0; i < ads.length; i++) {
    let createDiv = document.createElement("div");
    let title = document.createElement("h2");
    let price = document.createElement("p");
    createDiv.id = "products";
    createDiv.appendChild(title);
    createDiv.appendChild(price);

    title.innerText = ads[i].title;
    price.innerText = ads[i].price;
    div.appendChild(createDiv);
}


//Domaci skolski nacin

let productsElement = document.getElementById("products");

for (let ad in ads) {
    productsElement.innerHTML += ads[ad]['title'] + " " + ads[ad]['price']+" " + ads[ad]['image']+ "<br/>";
}


