let expName = document.getElementById("expName");
let expAmount = document.getElementById("expAmount");
let addBtn = document.getElementById("addBtn");
let expenseList = document.getElementById("expenseList");
let total = document.getElementById("total");

let expenses = [];

addBtn.addEventListener("click", function () {

    if (
        expName.value.trim() === "" ||
        expAmount.value.trim() === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    let expense = {
        name: expName.value,
        amount: Number(expAmount.value)
    };

    expenses.push(expense);

    renderExpenses();

    expName.value = "";
    expAmount.value = "";

});

function renderExpenses() {

    expenseList.innerHTML = "";
    
    let totalAmount = 0;

    for (let i = 0; i < expenses.length; i++) {
        let expense = expenses[i];
        totalAmount += expense.amount;
        let expenseDiv = document.createElement("div");
        expenseDiv.className = "expense";
        expenseDiv.innerHTML = `
            <span>${expense.name}</span>
            <span>₹${expense.amount}</span>
        `;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.className = "delete";
        deleteBtn.addEventListener("click", function () {

            expenses.splice(i, 1);

            renderExpenses();

        });

        expenseDiv.appendChild(deleteBtn);
        expenseList.appendChild(expenseDiv);

    }
    total.innerText = `Total : ₹${totalAmount}`;

}