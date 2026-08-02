let heading = document.getElementById("heading")
let rollBtn = document.getElementById("rollBtn")
let result = document.getElementById("result")

let dice = [
    "1️⃣",
    "2️⃣",
    "3️⃣",
    "4️⃣",
    "5️⃣",
    "6️⃣"
];

let color = [
    "Red", "Blue", "Green", "Yellow", "Purple", "Orange"
]

rollBtn.addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * dice.length);
    let randomDice = dice[randomIndex]
    let colors = color[randomIndex]
    result.innerText = `Number : ${randomDice}`
    document.body.style.backgroundColor = colors


})