let products = ["hleb", "mleko", "jogurt"];

// Vezba ispisati sve proizvode pomocu for petlje

for (i = 0; i < products.length; i++) {

    console.log(products[i]);

}

for (let product in products) {
    console.log(products[product]);
}

let cart = [
    {
        name: "Hleb",
        price: 99,
        amount: 1
    },
    {
        name: "Luk",
        price: 150,
        amount: 3
    },
    {
        name: "Mleko",
        price: 250,
        amount: 1
    },
]

console.log(cart[0]['price']);


// Vezba pomocu petlje ispisati cene svih proizvoda


for (let cartItem in cart) {
    let productPrice = cart[cartItem]['price'];
    // Ako je cena veca od 200 zaustaviti petlju
    if (productPrice > 200) {
        break;
    }
    console.log(productPrice);

}









