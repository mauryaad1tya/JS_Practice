let change = document.getElementById("change")
let box = document.getElementById("box")
let heading = document.getElementById("heading")
let mode = document.getElementById("mode")
let name = document.getElementById("name")
let course = document.getElementById("course")
let city = document.getElementById("city")

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
    let randomIndex1 = Math.floor(Math.random() * colors.length);
    box.style.backgroundColor = colors[randomIndex];
    let details = [heading, name, course, city];

    for (let i = 0; i < details.length; i++) {
        details[i].style.color = colors[randomIndex1];
    }
});

let darkMode = false;

mode.addEventListener("click", function () {

    if (darkMode) {
        box.style.backgroundColor = "white";
        heading.style.color = "black";
        name.style.color = "black";
        course.style.color = "black";
        city.style.color = "black";

        darkMode = false;
    } else {
        box.style.backgroundColor = "black";
        heading.style.color = "white";
        name.style.color = "white";
        course.style.color = "white";
        city.style.color = "white";

        darkMode = true;
    }

});