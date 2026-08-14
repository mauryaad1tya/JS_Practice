// let numbers = [10, 20, 30, 40];
// let result = numbers.some(function(number) {
//     return number > 35;
// });
// console.log(result);
// let students = [
//     { name: "Rahul", marks: 55 },
//     { name: "Priya", marks: 72 },
//     { name: "Rohit", marks: 35 },
//     { name: "Sneha", marks: 80 }
// ];

// let result = students.some(function(student){
//     return student.marks < 40
// })

// console.log(result);

let employees = [
    { name: "Rahul", salary: 50000 },
    { name: "Priya", salary: 60000 },
    { name: "Rohit", salary: 70000 },
    { name: "Sneha", salary: 80000 }
];

let salary = employees.every(function(employee){
    return employee.salary > 40000
})

console.log(salary);
