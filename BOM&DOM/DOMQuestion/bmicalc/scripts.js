let height = document.getElementById("height")
let weight = document.getElementById("weight")
let calculate = document.getElementById("calculate")
let bmi = document.getElementById("bmi")
let stat = document.getElementById("stat")


calculate.addEventListener("click", function () {
    if (height.value <= 0 || weight.value <= 0) {
        bmi.innerText = "Height and Weight must be greater than 0";
        return;
    }
    if (height.value.trim() === "" || weight.value.trim() === "") {
        bmi.innerText = "Please enter valid numbers";
        return;
    }
    else {
        hInMeters = height.value / 100
        BMI = weight.value / (hInMeters * hInMeters)

        if (BMI < 18.5) {
            bmi.innerText = BMI
            stat.innerText = "Underweight"
            stat.style.color = "blue"
        }
        else if (BMI > 18.5 && BMI < 24.9) {
            bmi.innerText = BMI
            stat.innerText = "Normal Weight"
            stat.style.color = "green"
        }
        else if (BMI > 25 && BMI < 29.9) {
            bmi.innerText = BMI
            stat.innerText = "Overweight"
            stat.style.color = "orange"
        }
        else {
            bmi.innerText = BMI
            stat.innerText = "Obese"
            stat.style.color = "red"
        }

        height.value = ""
        weight.value = ""
    }
})

