let heading = document.getElementById("heading");
let rollBtn = document.getElementById("rollBtn")

let dice = [
    1,2,3,4,5,6
];

rollBtn.addEventListener("click", function(){
    let randomIndex = Math.floor(Math.random()*dice.length);
    let value = dice[randomIndex];
    heading.innerText = `You rolled : ${value} `
})