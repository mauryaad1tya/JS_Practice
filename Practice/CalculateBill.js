function calculateBill(price,quantity,balance){
    if (price<=0){
        return"Invalid Price"
    }
    if (quantity<=0){
        return"Invalid Quantity"
    }
    let total = price * quantity;

    let discount;

    if (total >= 2000){
        discount = total*0.20;
    }
    else{   
        discount = total*0.10;
    }

    let finalBill = total - discount;
    if (finalBill>balance){
        return"insufficient Balance"
    }

    let remainingBalance = balance- finalBill;
    return`Purchase Successful. Total : ${total}, Discount :${discount}, final bill : ${finalBill}, remaining Balance :${remainingBalance}`
}

let res = calculateBill(500,2,5000)
console.log(res);