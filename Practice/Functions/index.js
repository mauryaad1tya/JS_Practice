// function mul(a,b){
//     return a*b;
// }
// let res = mul(2,3)
// console.log(res);


// function mult(a,b){
//     let res1 = console.log(a*b);
//     console.log(res1);


// }

// mult(3,4)


// function square(number){
//     return number*number
// }

// let res = square(9)
// console.log(res);

// function giveNumber(){
//     return 10
// }

// let result = giveNumber();

// console.log(result);


// function giveBack(num){
//     return num
// }

// let result = giveBack(10);

// console.log(result);

// function add(a,b){
//     // return a+b;
//     console.log(a+b);
// }

// let result = add(3,5);
// console.log(result);

// function mul(a,b){
//     return a*b
// }

// let r = mul(8,9);
// console.log(r);

// function sub(a,b){
//     return (a-b);
// }

// let result = sub(20,7)
// console.log(result);

// function sq(num){
//     return num*num;
// }

// let answer = sq(6)

// console.log(answer);

// function add(a,b){
//     let sum = a+b;
//     let mul = sum*2    
//     return mul
// }

// let answer = add(5,3)
// console.log(answer);


// function add(a,b){
//     return a+b;
// }

// function square(num){
//     return num*num;
// }

// let sum = add(3,2);
// let answer = square(sum)
// console.log(answer);


// function add(a,b){
//     return a+b
// }

// function multiply(num, value){
//     return num*value;
// }

// function subtract(num,value){
//     return num-value
// }

// let sum = add(5,3)
// let product = multiply(sum, 4);
// let answer = subtract(product, 2);

// console.log(answer);

// function checkEven(num){
//     if (num % 2 === 0) {
//         return ("Even")
//     }
//     else{
//         return("Odd")
//     }
// }

// let result = checkEven(8)

// console.log(result);

// function checkNumber(num){
//     if (num > 0) {
//         return ("Positive")
//     }
//     else if( num < 0){
//         return("Negative")
//     }
//     else{
//         return("Zero")
//     }
// }

// let result = checkNumber(-7)
// console.log(result); 

// function findLarger(a,b){
//     if (a>b) {
//         return a + " is larger"
//     }
//     else if(b>a){
//         return b + " is larger"
//     }
//     else{
//         return("equal")
//     }
// }


// let result = findLarger(15,9)
// console.log(result);

// function checkAge(age){
//     if (age < 13) {
//         return "Child"   
//     }
//     else if(age < 18){
//         return "Teenager"
//     }
//     else{
//         return "adult"
//     }
// }

// let result = checkAge(16)
// console.log(result);

// function checkTotal(a,b){
//     let total = a + b;
//     if (total >= 50) {
//         return "Pass";
//     }
//     else{
//         return "Fail";
//     }
// }

// let result = checkTotal(30,25);
// console.log(result);

// function calculateGrade(marks){
//     if (marks >= 90) {
//         return "A"
//     }
//     else if(marks >= 75){
//         return "B"
//     }
//     else if(marks >= 50){
//         return "C"
//     }
//     else{
//         return "Fail"
//     }
// }

// let grade = calculateGrade(82)
// console.log(grade);


// function calculateTotal(a,b,c){
//     return a+b+c;
// }

// function checkResult(total){
//     if(total >=150){
//         return"pass"
//     }
//     else{
//         return"Fail"
//     }
// }

// let total = calculateTotal(60,55,50);
// let result = checkResult(total);
// console.log(total, result);

// function calculateAverage(a,b,c){
//     return (a+b+c)/3
// }

// function getGrade(average){
//     if (average >= 80) {
//         return "A"
//     }
//     else if(average >=60){
//         return "B"
//     }
//     else if(average >=40){
//         return "C"
//     }
//     else{
//         return "Fail"
//     }
// }

// let average = calculateAverage(80,70,60);
// let grade = getGrade(average)

// console.log(average);
// console.log(grade);


// function calculateDiscount(price){
//     if (price >= 1000) {
//         return price*0.20
//     }
//     else{
//         return price*0.10
//     }
// }

// function calculateFinalPrice(price, discount){
//     return price-discount;
// }

// let discount = calculateDiscount(1500)
// console.log(discount);

// let finalPrice = calculateFinalPrice(1500, discount);
// console.log(finalPrice);

// function calculateTotal(price, quantity) {
//     return price * quantity
// }

// function calculateDiscount(total) {
//     if (total >= 2000) {
//         return total * 0.20
//     }
//     else {
//         return total * 0.10
//     }
// }

// function calculateFinalAmount(total, discount) {
//     return total - discount
// }

// let price = 500
// let quantity = 50

// let total = calculateTotal(price, quantity)
// let discount = calculateDiscount(total)
// let finalAmount = calculateFinalAmount(total, discount)

// console.log(total);
// console.log(discount);
// console.log(finalAmount);


// function divide(a,b){
//     if (b === 0) {
//         return"Cannot divide by zero"
//     }
//     else{
//         return a/b
//     }
// }

// let result = divide(20,4)
// let result1 = divide(20,0)
// console.log(result);
// console.log(result1);


// function checkLogin(username, password){
//     if (username === "") {
//         return "Username is required"
//     }
//     else if(password === " "){
//         return"Password is required"
//     }
//     return "login succesful"
// }

// let result = checkLogin(" ","1234");
// let result1 = checkLogin("Aditya", " ");
// let result2 = checkLogin("Aditya", "1234");

// console.log(result);
// console.log(result1);
// console.log(result2);

// function withdraw(balance, amount){
//     if (amount <= 0) {
//         return"Invalid Amount"
//     }
//     if (amount > balance){
//         return"Insufficient Balance"
//     }
//     return balance-amount
// }

// let result = withdraw(1000, -50)
// let result1 = withdraw(1000, 1500)
// let result2 = withdraw(1000, 300)


// console.log(result);
// console.log(result1);
// console.log(result2);

// function buyProduct(balance, price, quantity){
//     let total = price*quantity;
//     if (price<=0) {
//         return"Invalid Price"        
//     }
//     if (quantity<=0) {
//         return"invalid quantity"
//     }
//     if (total > balance) {
//         return "Insufficient balance"
//     }
//     return balance - total
// }

// let result = buyProduct(5000, -100, 2);
// let result1 = buyProduct(5000, 500, 0);
// let result2 = buyProduct(1000, 600, 2);
// let result3 = buyProduct(5000, 600, 2);


// console.log(result);
// console.log(result1);
// console.log(result2);
// console.log(result3);

// function placeOrder(balance, price, quantity){
//     if (price<=0){
//         return "Invalid Price"
//     }
//     if (quantity<=0){
//         return "Invalid Quantity"
//     }
//     total = price*quantity

//     if (total>balance){
//         return "Order Failed"
//     }
//     else{
//         remainingBalance = balance-total
//     }
//     return"Order Successful. Remaining balance : 3800"
// }
//  let res = placeOrder(5000,600,2)
//  console.log(res)


// function transerMoney(balance, amount, fee){
//     if (amount <= 0){
//         return "Invalid Amount"
//     }
//     if (fee < 0){
//         return "Invalid fee"
//     }
//     let totalDeduction = amount + fee 
//     if (totalDeduction > balance){
//         return"Insufficient Balance"
//     }
//     let remainingBalance =  balance - totalDeduction;

//     return"Transfer successful, Remaining Balance " +  remainingBalance;
// }

// let res = transerMoney(5000, 3000 ,0)
// console.log(res);

// function calculateSalary(salary, bonus, tax) {
//     if (salary <= 0) {
//         return "invalid Salary"
//     }
//     if (bonus < 0) {
//         return "Invalid bonus"
//     }
//     if (tax < 0) {
//         return "invalid tax"
//     }
//     let grossSalary = salary + bonus;
//     let finalSalary = grossSalary - tax;
//     return "Final Salary " + finalSalary
// }

// let res = calculateSalary(50000, 5000, 1000);
// console.log(res);

// function bookTickets(ticketPrice, quantity, balance){
//     if(ticketPrice<= 0 ){
//         return"Invalid Price"
//     }
//     if(quantity<= 0 ){
//         return"Invalid Quantity"
//     }
//     let totalCost = ticketPrice * quantity;
//     if (totalCost>balance){
//         return"insufficient Balance"
//     }
//     let remainingBalance = balance - totalCost;
//     return`Booking Successful. Total cost ${totalCost}. Remaining Balance : ${remainingBalance}`

// }

// let res = bookTickets(300,4,3000);
// console.log(res);


// function calculateBill(price,quantity,balance){
//     if (price<=0){
//         return"Invalid Price"
//     }
//     if (quantity<=0){
//         return"Invalid Quantity"
//     }
//     let total = price * quantity;

//     let discount;

//     if (total >= 2000){
//         discount = total*0.20;
//     }
//     else{   
//         discount = total*0.10;
//     }

//     let finalBill = total - discount;
//     if (finalBill>balance){
//         return"insufficient Balance"
//     }

//     let remainingBalance = balance- finalBill;
//     return`Purchase Successful. Total : ${total}, Discount :${discount}, final bill : ${finalBill}, remaining Balance :${remainingBalance}`
// }

// let res = calculateBill(500,2,5000)
// console.log(res);

// function canVote(age){
//     if (age <0){
//         return"Invalid Age"
//     }
//     if (age>=18){
//         return true
//     }
//     return false
// }

// let res = canVote(21);
// let res1 = canVote(16);
// let res2 = canVote(-5);
// let res3 = canVote(18);
 
// console.log(res);
// console.log(res1);
// console.log(res2);
// console.log(res3);
 
// const mult = (a,b) => {
//     return a*b;
// }

// let res = mult(4,5);
// console.log(res);


// const add = (a,b) => a+b;

// let res = add(10,5);
// console.log(res);

// const square = (num)=> num*num;

// let answer = square(6);
// console.log(answer);

// const checkEven = num =>{
//     if (num % 2 === 0){
//         return"Even"
//     }
//     else{
//         return "Odd"
//     }
// }

// let result = checkEven(7);
// console.log(result);

// const findLarger = (a,b) =>{
//     if (a>b){
//         return `${a} is larger`;
//     }
//     if (b>a){
//         return `${b} is larger`;
//     }
//     return "Both are equal"
// }

// let res = findLarger(20,35);
// console.log(res);


// const calculateFinalPrice = (price, discountPercent) =>{
//     if (price <= 0){
//         return"Invalid Price"
//     }
//     if (discountPercent < 0){
//         return"Invalid Discount"
//     }
//     if (discountPercent > 100){
//         return"Invalid Discount"
//     }
//     let discount = (price * discountPercent)/100;
    
//     let finalPrice = price - discount ;

//     return `Final Price : ${finalPrice}`;
// }

// let answer = calculateFinalPrice(1000, 20);
// console.log(answer);


// const checkStudentResult = (mark1, mark2, mark3)=>{
//     if (mark1 < 0 || mark1 > 100){
//     return "Invalid Marks"
//     }
//     if (mark2 < 0 || mark2 > 100){
//     return "Invalid Marks"
//     }
//     if (mark2 < 0 || mark2 > 100){
//     return "Invalid Marks"
//     }

//     let total = mark1+mark2+mark3;
//     let average = total/3;
//     if (average >= 50){
//         return`Pass. Average: ${average}`
//     }
//     return`Fail. Average:${average}`
// }

// let result = checkStudentResult(80,70,60);
// console.log(result);

// const withdrawMoney = (balance, amount) => {
//     if (balance < 0) {
//         return "Invalid balance";
//     }
//     if (amount <= 0) {
//         return "Invalid amount";
//     }
//     let fee;

//     if (amount >= 1000) {
//         fee = 20;
//     } else {
//         fee = 10;
//     }
//     let totalDeduction = amount + fee;
//     if (totalDeduction > balance) {
//         return "Insufficient balance";
//     }
//     let remainingBalance = balance - totalDeduction;

//     return `Withdrawal successful. Fee: ${fee}. Remaining balance: ${remainingBalance}`;
// };
// let answer = withdrawMoney(5000, 2000);
// console.log(answer);

