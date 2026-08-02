let heading = document.getElementById("heading")
let userGuess = document.getElementById("userGuess");
let guess = document.getElementById("guess");
let message = document.getElementById("message")
let attempts = document.getElementById("attempts")

let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let randomIndex = Math.floor(Math.random() * number.length);
let numbers = number[randomIndex]
let attempt = 0

console.log(numbers);

guess.addEventListener("click", function () {
    let choice = Number(userGuess.value)

    if (choice > numbers) {
        message.innerText = "Too high"
    }
    else if (choice < numbers) {
        message.innerText = "Too low"
    }
    else {
        message.innerText = "Congratulations, its correct"
    }
    console.log(numbers, guess.value);
    attempt++
    attempts.innerText = `Attempts: ${attempt}`;

})