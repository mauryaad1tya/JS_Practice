let inc = document.getElementById("+btn");
let dec = document.getElementById("-btn");
let reset = document.getElementById("resetBtn");
let counter = document.getElementById("counter");

console.log(inc);
console.log(dec);
console.log(reset);
let count = 0;

function updateCounter() {
    counter.innerText = count;

}

inc.addEventListener("click", function () {
    count++;
    console.log(count);
    updateCounter()
})

dec.addEventListener("click", function () {
    if (count > 0) {
        count--;
        console.log(count);
        updateCounter()
    }
})

reset.addEventListener("click", function () {
    count = 0;
    console.log(count);
    updateCounter()
})

