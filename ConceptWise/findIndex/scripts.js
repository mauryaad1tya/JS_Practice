let products = [

    { name: "Laptop", id: 101 },
    { name: "Mouse", id: 102 },
    { name: "Keyboard", id: 103 },
    { name: "Monitor", id: 104 }
];

let index = products.findIndex(function(product) {
    return product.id === 104;
});

console.log(index);