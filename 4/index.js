/* create a faulty calculator using java script 

It takes 2 numbers from the user 
+ ---> -
* ---> +
- ---> /
/ ---> **


*/


const a = Number(prompt("Enter the first number : "))
const op =prompt("Enter the operator :")
const b = Number(prompt("Enter the second number : "))


console.log("The numbers and the operator entered are : " + a + "," + b + "," + op);

if (op === "+") {
    console.log("Answer : " + (a - b));
}
else if (op === "*") {
    console.log("Answer : " + (a + b));
}
else if (op === "-") {
    console.log("Answer : " + (a / b));
}
else if (op === "/") {
    console.log("Answer :" + (a ** b));
}
else {
    console.log(" re-run the program");
}

