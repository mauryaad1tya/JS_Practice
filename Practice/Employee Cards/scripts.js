let employeeContainer = document.getElementById("employees")

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

function showEmployees(employees) {

    employees.forEach(function(employee){
        let bonus;
        if (employee.salary >= 50000){
            bonus = "Eligible for bonus"
        }
        else{
            bonus = "Not eligible"
        }

        employeeContainer.innerHTML += `
        <div>
            <h2>Name : ${employee.name}</h2>
            <p>Department : ${employee.department}</p>
            <p>Salary : ${employee.salary}, ${bonus}</p>
            </div>
            `
    })
}

showEmployees(employees)