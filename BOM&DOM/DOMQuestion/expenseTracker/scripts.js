let expName = document.getElementById("expName")
let expAmount = document.getElementById("expAmount")
let addBtn = document.getElementById("addBtn")

let expenses = [];

addBtn.addEventListener("click",function(){
    let expense = document.createElement("div")
    expenses.push(expName.value)
    expenses.push(expAmount.value)

    
    document.body.appendChild(expense)
})