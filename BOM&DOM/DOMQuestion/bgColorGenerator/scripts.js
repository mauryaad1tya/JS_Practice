let heading = document.getElementById("heading");
let colorBtn = document.getElementById("colorBtn");

let colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink"
];


colorBtn.addEventListener("click", function(){
    let randomIndex = Math.floor(Math.random() * colors.length);
    let randomIndex1 = Math.floor(Math.random() * colors.length);
    let randColor = colors[randomIndex];
    let randColor1 = colors[randomIndex1];
    heading.innerText = `Current Color: ${randColor}`;
    heading.style.color = randColor1;
    document.body.style.backgroundColor = randColor;

})