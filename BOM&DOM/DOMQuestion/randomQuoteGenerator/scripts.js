let heading = document.getElementById("heading");
let genBtn = document.getElementById("genBtn");

let quotes = [
    "Never give up.",
    "Practice makes perfect.",
    "Dream big.",
    "Stay positive.",
    "Believe in yourself."
];

let randomIndex = Math.floor(Math.random() * quotes.length);

genBtn.addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];
    heading.innerText = randomQuote;
    console.log(randomIndex);
    console.log(randomQuote);
});
