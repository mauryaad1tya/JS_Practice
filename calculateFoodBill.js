const calculateFoodbill = (orderAmount, isMember) =>{
    if(orderAmount <=0){
        return"invalid Order amount"
    }
    let discount;
    if (isMember){
        discount = (orderAmount * 15)/100;
    }
    else{
        discount = (orderAmount * 5)/100;
    }
    let finalBill = (orderAmount - discount);
    return `Order Amount :${orderAmount}
Discount:${discount}
Final Bill: ${finalBill}`
}

let result = calculateFoodbill(2000, false);
console.log(result);