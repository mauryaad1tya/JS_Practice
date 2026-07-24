let username = document.getElementById("username")
let password = document.getElementById("password")
let login = document.getElementById("login")
let message = document.getElementById("message")

login.addEventListener("click", function () {
    if (username.value.trim() === "" && password.value.trim() === "") {
        message.innerText = "Please enter the username and the password"
    }
    else if (password.value.trim() === "") {
        message.innerText = "Please enter the password"
    }
    else if (username.value.trim() === "") {
        message.innerText = "Please enter the username"
    }
    else if (password.value.length < 6) {
        message.innerText = "Password must be atleast 6 characters"

    }
    else {
        message.innerText = "Login successful"

    }
    username.value = "";
    password.value = "";

})