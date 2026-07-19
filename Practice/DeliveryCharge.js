const calculateOrder= (total, distance) =>{
    if (total <= 0){
        return"Invlaid Total"
    }
    if (distance<=0){
        return "invalid distance"
    }

    let deliveryCharge;
    if (distance>=10){
        deliveryCharge =100;
    }
    else{
        deliveryCharge = 50;
    } 

    let finalAmount = total + deliveryCharge;
    return`Order total : ${total}. Delivery Charge: ${deliveryCharge}. Final amount:${finalAmount}`
}

let result = calculateOrder(2100,15);
console.log(result);