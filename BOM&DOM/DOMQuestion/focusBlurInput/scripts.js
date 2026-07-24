let names = document.getElementById("names");
let message = document.getElementById("message");

names.addEventListener("focus", function(){
    message.innerText = "Start Typing..."
})

names.addEventListener("input", function(){
    message.innerText = `Hello ${names.value}`
})

names.addEventListener("blur", function(){
    if (names.value === "") {
        message.innerText = "You did not type anything"
    }
    else{
        message.innerText = "Thanks for entering your name"
    }
    
})