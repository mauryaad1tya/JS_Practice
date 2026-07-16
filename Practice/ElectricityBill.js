const calculateElectricityBill =(units) => {
    if (units < 0) {
        return"Invlaid units"
    }
    let rate;
    if (units >= 200){
        rate = 8;
    }
    else{
        rate = 5
    }
    let bill = units*rate;
    return `Units : ${units}. Rate: ${rate}. Total bill: ${bill}`

}

let result = calculateElectricityBill(250);
console.log(result);