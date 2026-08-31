let employeeContainer = document.getElementById("employees");

let employees = [
    {
        name: "Rahul",
        department: "IT",
        salary: 50000
    },
    {
        name: "Priya",
        department: "HR",
        salary: 60000
    },
    {
        name: "Rohit",
        department: "IT",
        salary: 45000
    },
    {
        name: "Sneha",
        department: "Finance",
        salary: 70000
    }
];

function showHighSalaryEmployees(employees) {

    let highSalaryEmployees = employees.filter(function(employee) {
        return employee.salary > 50000;
    });

    highSalaryEmployees.forEach(function(employee) {

        employeeContainer.innerHTML += `
            <div>
                <h2>${employee.name}</h2>
                <p>Department: ${employee.department}</p>
                <p>Salary: ₹${employee.salary}</p>
            </div>
        `;

    });
}

showHighSalaryEmployees(employees);