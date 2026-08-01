let conBtn = document.getElementById("conBtn")
let celsius = document.getElementById("celsius")
let result = document.getElementById("result")
let heading = document.getElementById("heading")

conBtn.addEventListener("click", function () {
    if (celsius.value.trim() === "") {
        result.innerText= "Please enter a temperature."
    }
    else{
    result.innerText = `The temperature in fahrenite is : ${(celsius.value * 9 / 5) + 32}`
    }
    celsius.value = "";
})