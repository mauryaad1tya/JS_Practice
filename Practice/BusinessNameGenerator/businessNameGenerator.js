console.log("Hello");

let a = prompt("Please enter Generate: ")

let adj = ["Crazy", "Amazing", "Fire"];
let shopName = ["engine", "foods", "garments"];
let word = ["bros", "limited", "hub"];

let randomAdj = adj[Math.floor(Math.random() * adj.length)];
let randomShopName = shopName[Math.floor(Math.random()* shopName.length)];
let randomWord = word[Math.floor(Math.random() * word.length)];

// console.log(randomAdj);
// console.log(randomShopName);
// console.log(randomWord);

// if (a === "Generate"){
//     console.log(`The random business name is ${randomAdj} ${randomShopName} ${randomWord}`);
// }
// else{
//     console.log("Enter 'Generate' to generate a random name for your business");
// }