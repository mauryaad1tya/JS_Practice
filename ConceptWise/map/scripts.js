let products = [
    {
        name: "Laptop",
        price: 65000
    },
    {
        name: "Mouse",
        price: 500
    },
    {
        name: "Keyboard",
        price: 1200
    }
];
let discountedPrice ;


let newProduct = products.map(function(product){
    discountedPrice = product.price - (product.price*15)/100;
    return {
        name: product.name,
        price: product.price,
        discountedPrice: discountedPrice
    }
})

console.log(newProduct);