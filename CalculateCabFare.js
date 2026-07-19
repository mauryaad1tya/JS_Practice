const CalculateCabFare = (distance) =>{
    if (distance<=0){
        return"invalid distance";
    }
    let rate;
    if (distance >=20){
        rate = 15;
    }
    else{
        rate = 20;
    }
    let fare = distance * rate; 
    return `Distance : ${distance} km. Rate: ${rate}. Total fare: ${fare}`
}

let result = CalculateCabFare(25);

console.log(result);