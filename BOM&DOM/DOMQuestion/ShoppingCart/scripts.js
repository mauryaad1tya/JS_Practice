let plus = document.getElementById("plus");
let minus = document.getElementById("minus");

let quantity = document.getElementById("quantity");
let total = document.getElementById("total");

let count = 0;
let price = 65000;

plus.addEventListener("click", function () {

    count++;

    quantity.innerText = "Quantity: " + count;

    total.innerText = "Total: ₹" + (count * price);

});

minus.addEventListener("click", function () {

    if (count > 0) {

        count--;

        quantity.innerText = "Quantity: " + count;

        total.innerText = "Total: ₹" + (count * price);

    }

});