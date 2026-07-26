let change = document.getElementById("change")
let box = document.getElementById("box")
let heading = document.getElementById("heading")
let mode = document.getElementById("mode")

let colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown"
];

change.addEventListener("click", function () {

    let randomIndex = Math.floor(Math.random() * colors.length);
    box.style.backgroundColor = colors[randomIndex];
    heading.style.backgroundColor = colors[randomIndex];

});

mode.addEventListener("click", function(){
    box.style.backgroundColor = "black"
})
