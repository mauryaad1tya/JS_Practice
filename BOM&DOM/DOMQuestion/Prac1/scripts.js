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


let heading = document.getElementById("heading");
let btn = document.getElementById("btn");

let foods = [
    "Pizza 🍕",
    "Burger 🍔",
    "Pasta 🍝",
    "Biryani 🍛",
    "Noodles 🍜",
    "Ice Cream 🍨"
];

btn.addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * foods.length);
    let food = foods[randomIndex]
    heading.innerText = `The food for today is : ${food}`
})