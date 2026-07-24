let names = document.getElementById("names");
let addStudent = document.getElementById("addStudent");
let message = document.getElementById("message");

let students = [];

addStudent.addEventListener("click", function () {
    if (names.value.trim() === "") {
        message.innerText = "Enter a name"
    }
    else {
        students.push(names.value)
        message.innerHTML = students.join("<br>")
        names.value = "";
    }
})


