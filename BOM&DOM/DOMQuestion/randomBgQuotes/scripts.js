let heading = document.getElementById("heading");
let clrQuotesBtn = document.getElementById("clrQuotesBtn");

let quotes = [
    "Never Give Up",
    "Stay Positive",
    "Keep Learning",
    "Dream Big"
];

let colors = [
    "red",
    "green",
    "blue",
    "orange"
];

clrQuotesBtn.addEventListener("click", function () {
    let quotesIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[quotesIndex];
    let colorIndex = Math.floor(Math.random() * quotes.length);
    let color = colors[colorIndex];

    heading.innerText = `The current color is : ${color} and the quote is :${quote}`
    document.body.style.backgroundColor = color

})
