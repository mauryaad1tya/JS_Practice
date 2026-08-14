let students = [
    { name: "Rahul", marks: 85 },
    { name: "Priya", marks: 39 },
    { name: "Rohit", marks: 68 },
    { name: "Sneha", marks: 76 }
];

let newStud = students.map(function(student){
    let result;
    if (student.marks >= 40) {
        result = "Pass"
    }
    else{
        result = "Fail"
    }

    return {
        name:student.name,
        marks:student.marks,
        result: result
    }
})

console.log(newStud);