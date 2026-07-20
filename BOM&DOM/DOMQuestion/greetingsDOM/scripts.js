let heading = document.getElementById("heading");
let hello = document.getElementById("helloBtn");
let bye = document.getElementById("byeBtn");


function changeHeading(text, color, fontSize){
    heading.innerText = text;
    heading.style.color = color;
    heading.style.fontSize = fontSize;
}

hello.addEventListener("click", function(){
    changeHeading("Hello User !", "green","70px")
})

bye.addEventListener("click", function(){
    changeHeading("Bye User !", "red", "50px");
})
