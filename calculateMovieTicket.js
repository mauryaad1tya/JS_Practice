const calculateMovieTicket = (age, isWeekend) => {
    if (age <= 0) {
        return "Invalid Age";
    }

    let ticket = 200;
    let discount = 0;

    if (age < 12) {
        discount = (ticket * 50) / 100;
    } else if (age >= 60) {
        discount = (ticket * 30) / 100;
    }

    let finalTicketPrice = ticket - discount;

    if (isWeekend) {
        finalTicketPrice += 50;
    }

    return `Age: ${age}
Weekend: ${isWeekend}
Final Ticket Price: ₹${finalTicketPrice}`;
};

let result = calculateMovieTicket(10, true);
console.log(result);