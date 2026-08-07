// let btn = document.getElementById("btn")
// let del = document.getElementById("del")


// let para;
// btn.addEventListener("click", function () {
//     para = document.createElement("p")
//     para.className = "message"
//     para.innerText = "I created this using JavaScript"
//     document.body.appendChild(para)
// })

// del.addEventListener("click", function () {
//         para.remove();
//     })
let heading = document.querySelector("h1")
let message = document.querySelector(".message")
let btn = document.querySelector("btn")

// let cha = document.querySelector("#change")
let fruits = document.querySelectorAll("p")


cha.addEventListener("click", function () {

    for (let i = 0; i < fruits.length; i++) {

        fruits[i].style.color = "blue";

    }

});