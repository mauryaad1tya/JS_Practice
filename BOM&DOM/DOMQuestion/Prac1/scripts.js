// console.log(document);
// console.log(document.title);
// console.log(document.body);
// console.log(document.head);
// document.title = "Learning DOM"
// console.log(document.title);

// let heading = document.getElementById("heading");
// console.log(heading);

// let heading =document.getElementById("heading");
// console.log(heading.innerText = "welcome to JS");

// let heading = document.getElementById("heading");
// console.log(heading);
// console.log(heading.innerText);
// heading.innerText = "welcome to DOM"
// console.log(heading.innerText);

// let heading = document.getElementById("heading");
// let button = document.getElementById("btn")
// let para =document.getElementById("para");
// console.log(heading);
// console.log(button);
// let count = 0;
// button.addEventListener("click", function () {
//     count = count +1;
//     console.log(count);
//     heading.innerText = "Welcome to DOM"
//     para.innerText = "DOM is fun"
//     button.innerText = "Thank you"
//     console.log(para.innerText);
//     console.log("Cliked Once");
// });

// button.addEventListener("click", function(){
//     heading.innerText = "Hello JavaScript"
// })

// let para = document.getElementById("para");
// let count = 0;
// let button = document.getElementById("btn")

// button.addEventListener("click", function () {
//     count++;
//     if (count === 1) {
//         para.innerText = `Clicked ${count} time`
//     }
//     else {
//         para.innerText = `Clicked ${count} times`
//     }
// })


// let heading = document.getElementById("heading");
// let btn = document.getElementById("btn");

// let foods = [
//     "Pizza 🍕",
//     "Burger 🍔",
//     "Pasta 🍝",
//     "Biryani 🍛",
//     "Noodles 🍜",
//     "Ice Cream 🍨"
// ];

// btn.addEventListener("click", function () {
//     let randomIndex = Math.floor(Math.random() * foods.length);
//     let food = foods[randomIndex]
//     heading.innerText = `The food for today is : ${food}`
// })


// let employees = [
//     {
//         name: "Rahul",
//         salary: 40000,
//         department: "HR"
//     },
//     {
//         name: "Aman",
//         salary: 55000,
//         department: "IT"
//     },
//     {
//         name: "Priya",
//         salary: 60000,
//         department: "Finance"
//     }
// ];



// for (let i = 0; i < employees.length; i++) {
//     console.log(`${employees[i].name} works in ${employees[i].department} and earns salary ₹${employees[i].salary}`);

// }
// employees[0].salary = 45000

// console.log(employees[0].salary);

// employees.push({
//     name: "Sneha",
//     salary : 70000,
//     department:"Marketing"
// })

// console.log(employees);


// let movies = [];
// movies.push({
//     name: "Interstellar",
//     rating: 10
// },
//     {
//         name: "Inception",
//         rating: 10
//     },
//     movies.push({
//         name: "Avatar",
//         rating: 9
//     }
// )

// for (let i = 0; i < movies.length; i++) {
//     console.log(`${movies[i].name} ⭐ ${movies[i].rating} `   );
// }


// let books = [];

// books.push({
//     title: "Atomic habits",
//     author: "James Clear",
//     price: 450
// },
//     {
//         title: "Atomic habits",
//         author: "James Clear",
//         price: 450
//     },
//     {
//         title: "Deep Work",
//         author: "Cal Newport",
//         price: 350
//     },
//     {
//         title: "Clean Code",
//         author: "Robert C. Martin",
//         price: 650
//     }
// )

// for (let i = 0; i < books.length; i++) {
//    console.log(`${books[i].title} by ${books[i].author} costs ₹${books[i].price}`);

// }


// let cart = [];

// cart.push(
//     {
//         name: "Laptop",
//         price: 65000
//     },
//     { 
//         price: 500
//     },
//     {
//         name: "Keyboard",
//         price: 1200
//     }
// )

// for (let i = 0; i < cart.length; i++) {
//     console.log(`${i+1}. ${cart[i].name} - ₹${cart[i].price}`);    
// }

// let phones = [
//     {
//         brand: "Samsung",
//         price: 25000,
//         stock: 10
//     },
//     {
//         brand: "Apple",
//         price: 85000,
//         stock: 5
//     },
//     {
//         brand: "OnePlus",
//         price: 40000,
//         stock: 8
//     }
// ];

// for (let i = 0; i < phones.length; i++) {
//     console.log(phones[i].brand);
// }

// phones[1].stock = 7

// console.log(phones);

// phones.push({
//     brand: "Google",
//     price: 50000,
//     stock: 6
// })


// for (let i = 0; i < phones.length; i++) {
//     let phone = phones[i]

//     console.log(`${phone.brand} - ₹${phone.price} (${phone.stock}left)`);

// }

// let total = 0;
// for (let i = 0; i < phones.length; i++) {
//     let phone = phones[i]
//     total += phone.price * phone.stock ;
// }
// console.log("Total inventory value = ",total);

// btn.addEventListener("click", function(){
//     heading.innerText = "Welcome Back"
// })

let score = 0;

btn.addEventListener("click", function(){
    score = score+1;
    heading.innerText = `Score : ${score}`
    
})
let isOnline = false;

btn.addEventListener("click", function(){
    if(!isOnline){
        heading.innerText = "online"
        isOnline = true;
        heading.style.color = "green"
    }
    else{
        heading.innerText = "offline"
        isOnline = false;
        heading.style.color = "red"
    }
})

let heading = document.getElementById("heading");
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")

let count = 0;

plus.addEventListener("click", function(){
    count = count +1;
    heading.innerText = `Count : ${count}`
    if(count != 10){
        heading.style.color = "black"
    }
    else{
        heading.style.color = "blue"
        
    }
})

minus.addEventListener("click", function(){
    if (count > 0) {
        count--;
    }
    heading.innerText = `Count : ${count}`
    if(count != 10){
        heading.style.color = "black"
    }
    else{
        heading.style.color = "blue"
        
    }
})
