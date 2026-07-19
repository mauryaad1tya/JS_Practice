let redBtn = document.getElementById("redBtn");
let greenBtn = document.getElementById("greenBtn");
let blueBtn = document.getElementById("blueBtn");
let blackBtn = document.getElementById("blackBtn");
let resetBtn = document.getElementById("resetBtn");
let heading = document.getElementById("heading")


function changeTheme(background, textColor) {
    document.body.style.backgroundColor = background;
    document.body.style.color = textColor;
}

redBtn.addEventListener("click", function(){
    changeTheme("red","black")
})

greenBtn.addEventListener("click", function(){
    changeTheme("green","black")
})

blueBtn.addEventListener("click", function(){
    changeTheme("blue","white")
})

blackBtn.addEventListener("click", function(){
    changeTheme("black","white")
})

resetBtn.addEventListener("click", function(){
    changeTheme("white","black")

})


