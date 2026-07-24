let password = document.getElementById("password")
let strength = document.getElementById("strength")

password.addEventListener("input", function () {
    if (password.value.length === 0) {
        strength.innerText = "Enter a password";
    }
    else if (password.value.length < 4) {
        strength.innerText = "Weak 🔴"
    }
    else if (password.value.length < 7) {
        strength.innerText = "Medium 🟡"
    }
    else {
        strength.innerText = "Strong 🟢"
    }
})