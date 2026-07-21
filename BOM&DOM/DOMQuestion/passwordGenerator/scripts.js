let heading = document.getElementById("heading");
let genBtn = document.getElementById("genBtn");

let letters = [
    "A", "B", "C", "D", "E",
    "a", "b", "c", "d", "e",
    "1", "2", "3", "4", "5",
    "@", "#", "$", "%"
];

genBtn.addEventListener("click", function () {
    let ask = prompt("How many letters password do you want ?")
    let password = "";
    for (let i = 0; i < ask; i++) {
        let randomIndex = Math.floor(Math.random() * letters.length);
        let letter = letters[randomIndex];
        password += letter;
    }
    heading.innerText = `The generate password is ${password} `
})