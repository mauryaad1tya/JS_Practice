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

// let prod = document.querySelector("div")
// let products = [
//     {
//         name: "Laptop",
//         price: 65000
//     },
//     {
//         name: "Mouse",
//         price: 500
//     },
//     {
//         name: "Keyboard",
//         price: 1200
//     }
// ];
// products.forEach(function(product){
//     prod.innerHTML += `<p>${product.name} - ₹${product.price}</p>`
// })


// let numbers = [10, 20, 30, 40, 50];
// numbers.forEach(function(number){
//     console.log(number);
// })

// let numbers = [5, 10, 15, 20];

// numbers.forEach(function(number){
//     console.log(number*2);
// })

// let fruits = ["Apple", "Mango", "Orange", "Banana"];

// fruits.forEach(function(fruit, index){
//     console.log(`${index} - ${fruit}`);
// })

// let students = [
//     { name: "Rahul", marks: 85 },
//     { name: "Priya", marks: 92 },
//     { name: "Rohit", marks: 76 }
// ];

// students.forEach(function(student){
//     console.log(`${student.name} scored ${student.marks}`);
// })

// let output = document.getElementById("output");

// let colors = ["red", "blue", "green", "orange"];

// colors.forEach(function(color){
//     output.innerHTML += `<p>${color}</p>`
// })

// let products = [
//     {
//         name: "Laptop",
//         price: 65000,
//         stock: 10
//     },
//     {
//         name: "Mouse",
//         price: 500,
//         stock: 50
//     },
//     {
//         name: "Keyboard",
//         price: 1200,
//         stock: 25
//     }
// ];

// products.forEach(function(product){
//     console.log(`${product.name} -> ₹${product.price} -> ${product.stock} available`);
// })
// let numbers = [1, 2, 3, 4];
// let doubled = numbers.map(function(number) {
//     return number * 2;
// });

// console.log(doubled);

// let numbers = [5, 10, 15, 20];

// let doubledNum = numbers.map(function(number){
//     return number*2
// })

// console.log(doubledNum);

// let numbers = [10, 20, 30, 40];

// let newNum = numbers.map(function(number){
//     return number+10
// })

// console.log(numbers);
// console.log(newNum);

// let names = ["rahul", "priya", "aditya", "sneha"];

// let upperName = names.map(function(name){
//     return name.toUpperCase()
// })

// console.log(upperName);


// let products = [
//     {
//         name: "Laptop",
//         price: 65000
//     },
//     {
//         name: "Mouse",
//         price: 500
//     },
//     {
//         name: "Keyboard",
//         price: 1200
//     }
// ];

// let productNames = products.map(function(product) {
//     return product.name;
// });

// console.log(productNames);

// let products = [
//     {
//         name: "Laptop",
//         price: 65000
//     },
//     {
//         name: "Mouse",
//         price: 500
//     },
//     {
//         name: "Keyboard",
//         price: 1200
//     }
// ];

// let newProd = products.map(function(product){
//     let newPrice = product.price + (product.price * 10 / 100);
//     return {
//     name: product.name,
//     price: newPrice
// };
// })

// console.log(newProd);