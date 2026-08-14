let products = [
    { name: "Laptop", price: 65000, stock: 5 },
    { name: "Mouse", price: 500, stock: 0 },
    { name: "Keyboard", price: 1200, stock: 10 },
    { name: "Monitor", price: 15000, stock: 3 },
    { name: "Phone", price: 40000, stock: 0 }
];



let stockProducts = products.filter(function(product){
    return product.stock > 0;
})
console.log(stockProducts);



let firstProduct = products.find(function(product){
    return product.price > 10000
})
console.log(firstProduct);



let nameArray = products.map(function(product){
    return product.name;
})
console.log(nameArray);



let atLeastOne = products.some(function(product){
    return product.stock === 0;
})
console.log(atLeastOne);



let sumOfAll = products.reduce(function(sum,product){
    return sum + product.price* product.stock
},0);
console.log(sumOfAll);