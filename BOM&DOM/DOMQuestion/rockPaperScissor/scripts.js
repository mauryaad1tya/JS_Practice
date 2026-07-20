let heading = document.getElementById("heading");

let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorBtn = document.getElementById("scissorBtn");

let player = document.getElementById("player");
let computer = document.getElementById("computer");
let result = document.getElementById("result");

let choices = ["Rock", "Paper", "Scissor"];

function playGame(playerChoice) {

    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];

    player.innerText = `Player: ${playerChoice}`;
    computer.innerText = `Computer: ${computerChoice}`;

    if (playerChoice === computerChoice) {
        result.innerText = "Result: Draw";
    }

    else if (
        (playerChoice === "Rock" && computerChoice === "Scissor") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissor" && computerChoice === "Paper")
    ) {
        result.innerText = "Result: You Win";
    }

    else {
        result.innerText = "Result: Computer Wins";
    }
}

rockBtn.addEventListener("click", function () {
    playGame("Rock");
});
paperBtn.addEventListener("click", function () {
    playGame("Paper");
});
scissorBtn.addEventListener("click", function () {
    playGame("Scissor");
});
console.warn("legs");
