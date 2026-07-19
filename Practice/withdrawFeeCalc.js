const withdrawMoney = (balance, amount) => {
    if (balance < 0) {
        return "Invalid balance";
    }
    if (amount <= 0) {
        return "Invalid amount";
    }
    let fee;

    if (amount >= 1000) {
        fee = 20;
    } else {
        fee = 10;
    }
    let totalDeduction = amount + fee;
    if (totalDeduction > balance) {
        return "Insufficient balance";
    }
    let remainingBalance = balance - totalDeduction;

    return `Withdrawal successful. Fee: ${fee}. Remaining balance: ${remainingBalance}`;
};
let answer = withdrawMoney(5000, 2000);
console.log(answer);