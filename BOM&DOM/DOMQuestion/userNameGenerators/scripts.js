let heading = document.getElementById("heading");
let genBtn = document.getElementById("genBtn");

let names = [
    "Rahul",
    "Tiger",
    "Shadow",
    "Dragon",
    "Phoenix",
    "Ninja"
];

let numbers = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
];

genBtn.addEventListener("click", function () {
    let username = "";
    let randomName = Math.floor(Math.random() * names.length);
    let name = names[randomName]
    username +=name+"_";
    let choice = prompt("How many numbers do you want")
    for (let i = 0; i < choice; i++) {
        let randomNum = Math.floor(Math.random() * numbers.length); 
        let num = numbers[randomNum]
        username +=num;   
    }
    heading.innerText = username;
})