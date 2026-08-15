// let employee = {
//     name: "Aditya",
//     age: 23,
//     salary: 60000,
//     department: "IT"
// }; 
// let {name, age, salary, department} = employee;
// console.log(name);

// let product = {
//         name: "Laptop",
//         price: 65000,
//         stock: 10
// };

// let { name, price, stock } = product;
// console.log(name);
// console.log(price);
// console.log(stock);
// console.log("Mahima");
// let product = {
//     name: "Laptop",
//     price: 65000,
//     stock: 10
// };

// let { name, price, stock } = product;
// console.log(name);
// console.log(price);
// console.log(stock);

// let employee = {
//     name: "Rahul",
//     salary: 50000,
//     department: "IT"
// };


// let {name: employeeName, salary :employeeSalary, department: employeeDepartment} = employee

// console.log(employeeName, employeeSalary, employeeDepartment);


// let student = {
//     name: "Rahul",
//     age: 22
// };

// let {name: studentName, age : studentAge, course = "Not assigned"} = student

// console.log(studentName);
// console.log(studentAge);
// console.log(course);

// let numbers = [10, 20, 30];

// let [first, second, third] = numbers;

// console.log(first);
// console.log(second);
// console.log(third);

// let fruits = ["Apple", "Mango", "Orange"];

// let [mango, secondFruit, thirdFruit] = fruits
// console.log(mango);
// console.log(secondFruit);
// console.log(thirdFruit);

// let numbers = [10, 20, 30, 40, 50];

// let [first, , third, ,fifth ] = numbers

// console.log(first);
// console.log(third);
// console.log(fifth);

// let colors = ["red", "blue"];
// let [firstColor, secondColor, thirdColor = "green"] = colors

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
let numbers = [10, 20, 30, 40, 50];
let [first, ...remaining] = numbers;

console.log(first);
console.log(remaining);

let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];
let [firstFruit, ...rest] = fruits
console.log(firstFruit);
console.log(rest);