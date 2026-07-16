let number = 6;
let factorial = 1;

for (let i = 1; i <= number; i++) {

    factorial = factorial * i;

    console.log("Current number:", i);
    console.log("Factorial value:", factorial);
}

console.log("Final answer:", factorial);