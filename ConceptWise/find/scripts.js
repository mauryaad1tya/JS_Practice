// let students = [
//     { name: "Rahul", id: 101 },
//     { name: "Priya", id: 102 },
//     { name: "Rohit", id: 103 }
// ];

// let student = students.find(function(student) {
//     return student.id === 102;
// });

// console.log(student);

// let products = [
//     { name: "Laptop", id: 101 },
//     { name: "Mouse", id: 102 },
//     { name: "Keyboard", id: 103 },
//     { name: "Monitor", id: 104 }
// ];

// let findProd = products.find(function(product){
//     return product.id == 103    
// })

// console.log(findProd);

// let employees = [
//     { name: "Rahul", id: 101, department: "IT" },
//     { name: "Priya", id: 102, department: "HR" },
//     { name: "Rohit", id: 103, department: "IT" },
//     { name: "Sneha", id: 104, department: "Finance" }
// ];

// let itDept = employees.find(function(employee){
//     return employee.department === "IT"
// })

// console.log(itDept);

// let employees = [
//     { name: "Rahul", id: 101, department: "IT" },
//     { name: "Priya", id: 102, department: "HR" },
//     { name: "Rohit", id: 103, department: "IT" },
//     { name: "Sneha", id: 104, department: "Finance" }
// ];

// let employee = employees.find(function(employee) {
//     return employee.department === "Marketing";
// });

// if (employee) {
//     console.log(employee);
// } else {
//     console.log("Employee not found");
// }

let products = [
    { name: "Laptop", price: 65000, stock: 10 },
    { name: "Mouse", price: 500, stock: 0 },
    { name: "Keyboard", price: 1200, stock: 15 },
    { name: "Monitor", price: 15000, stock: 0 },
    { name: "Phone", price: 40000, stock: 5 }
];

let findProducts = products.find(function(product){
    return product.price > 10000 && product.stock > 0
})

console.log(findProducts);