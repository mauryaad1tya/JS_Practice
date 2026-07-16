let boxes = document.getElementsByClassName("box")
console.log(boxes);

boxes[4].style.backgroundColor = "red"

document.getElementById("Red").style.backgroundColor = "red" 


document.querySelector(".box").style.backgroundColor = "green"

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green"
})
  