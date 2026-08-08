// let movies = [
//     {
//         title: "Interstellar",
//         rating: 10
//     },
//     {
//         title: "Inception",
//         rating: 9
//     },
//     {
//         title: "Avatar",
//         rating: 8
//     }
// ];

// movies.forEach(function(movie){
//     console.log(`${movie.title} ⭐${movie.rating}`);
// }) 

// let cities = [
//     "Bengaluru",
//     "Delhi",
//     "Mumbai",
//     "Chennai"
// ];

// cities.forEach(function(city, index){
//     console.log(index, city);
// })

// let employees = [
//     {
//         name: "Rahul",
//         salary: 50000
//     },
//     {
//         name: "Aditya",
//         salary: 65000
//     },
//     {
//         name: "Sneha",
//         salary: 70000
//     }
// ];

// employees.forEach(function(employee){
//     console.log(`${employee.name} earns ₹${employee.salary}`);
// })

// let output = document.querySelector("div")
// let fruits = [
//     "Apple",
//     "Mango",
//     "Orange",
//     "Banana"
// ];

// fruits.forEach(function(fruit){
//     output.innerHTML = fruits
// })

let prod = document.querySelector("div")
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
products.forEach(function(product){
    prod.innerHTML += `<p>${product.name} - ₹${product.price}</p>`
})
