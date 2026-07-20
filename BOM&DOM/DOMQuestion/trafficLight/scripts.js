let heading = document.getElementById("heading");
let redBtn = document.getElementById("redBtn");
let yellowBtn= document.getElementById("yellowBtn");
let greenBtn= document.getElementById("greenBtn");


function changeSignal(message, color, bgcolor){
    heading.innerText = message;
    heading.style.color = color
    heading.style.backgroundColor = bgcolor;
}

redBtn.addEventListener("click", function(){
    changeSignal("🔴 Stop", "Blue", "red")
})
yellowBtn.addEventListener("click", function(){
    changeSignal("🟡 Get Ready", "Blue", "yellow")
})
greenBtn.addEventListener("click", function(){
    changeSignal("🟢 Go", "blue","green")
})