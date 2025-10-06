
document.querySelector("#title").style.color ="red";
document.querySelector(".subtitle").style.color ="green";


// Vezba 1 moj nacin

let products = document.querySelectorAll(".product");

for (let i = 0; i < products.length; i++) {

    products[i].style.color ="blue";

}

// Vezba 1 skolski nacin

for(product of products) {

    product.style.color ="#44444E";
}

// Vezba 2

let price = document.querySelectorAll(".productPrice");

for (p of price) {

    if(p.textContent >= 5000){
        p.style.color ="#E62727";
    } else {
        p.style.color ="#08CB00";
    }

}


