let bill = document.getElementById("bill")
let tip = document.getElementById("tip")
let calculate = document.getElementById("calculate")
let tipAmount = document.getElementById("tipAmount")
let totalAmount = document.getElementById("totalAmount")


calculate.addEventListener("click", function () {
    if (bill.value.trim() === "" || tip.value.trim() === "") {
        alert("Please fill all fields.");
        return;
    }
    
    let Tip = Number((bill.value * tip.value) / 100);
    let total = Number(bill.value) + Tip;
    tipAmount.innerText = Tip;
    totalAmount.innerText = total;
    console.log(Tip);
    bill.value = ""
    tip.value = ""
});