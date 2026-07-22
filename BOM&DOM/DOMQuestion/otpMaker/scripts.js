let heading = document.getElementById("heading");
let genBtn = document.getElementById("genBtn");

let digits = [
    "0", "1", "2", "3", "4",
    "5", "6", "7", "8", "9"
];

genBtn.addEventListener("click", function () {
    let choice = Number(prompt("What is the length of the OTP ?"));
    if (isNaN(choice) || choice <= 0) {
        heading.innerText = "Please enter a valid number.";
        return;
    }

    let otp = "";
    for (let i = 0; i < choice; i++) {
        let randomIndex = Math.floor(Math.random() * digits.length);
        let digit = digits[randomIndex];
        otp += digit;
    }
    heading.innerText = otp;
})