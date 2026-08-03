let date = document.getElementById("date")
let age = document.getElementById("age")
let calc = document.getElementById("calc")



calc.addEventListener("click", function () {

    let birthday = new Date(date.value);
    let today = new Date();

    let birthYear = birthday.getFullYear();
    let birthMonth = birthday.getMonth();
    let birthDay = birthday.getDate();

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDay = today.getDate();

    let userAge = currentYear - birthYear;

    if (currentMonth < birthMonth) {
        userAge--;
    }
    else if (currentMonth === birthMonth && currentDay < birthDay) {
        userAge--;
    }

    age.innerText = `Age: ${userAge} years`;

});