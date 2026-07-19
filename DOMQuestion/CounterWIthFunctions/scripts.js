let plus = document.getElementById("plus");
let minus = document.getElementById("Minus");
let reset = document.getElementById("Reset");
let counter = document.getElementById("counter");


let count = 0;
function updateCounter() {
    counter.innerText = count;
    if (count > 0) {
        counter.style.color = "green";
    }
    if (count < 0) {
        counter.style.color = "red";
    }
    if (count === 0){
        counter.style.color = "blue"
    }
    
}

plus.addEventListener("click", function () {
    count++;
    updateCounter()
})
minus.addEventListener("click", function () {
    count--;
    updateCounter()
})
reset.addEventListener("click", function () {
    count = 0;
    updateCounter()
})