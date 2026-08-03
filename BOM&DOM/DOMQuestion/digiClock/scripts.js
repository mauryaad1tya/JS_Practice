setInterval(function () {

    let today = new Date();

    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (hour >=12){
        seconds = seconds + " PM"
    }
    else{
        seconds = seconds + " AM"
    }
    clock.innerText = `${hour}:${minute}:${seconds}`;

}, 1000);