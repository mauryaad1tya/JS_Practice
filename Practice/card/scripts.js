let card = document.getElementById("card");


let student = {
    name: "Aditya",
    course: "JavaScript",
    marks: 85,
    image: "https://via.placeholder.com/150"
};

function showStudent(student) {

    card.innerHTML = `
        <img src="${student.image}" alt="Student Image">

        <h2>${student.name}</h2>

        <p>Course: ${student.course}</p>

        <p>Marks: ${student.marks}</p>
    `;
}

// showStudent(student)