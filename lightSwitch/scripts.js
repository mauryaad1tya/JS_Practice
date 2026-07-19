let stat = document.getElementById("stat");
let toggleBtn = document.getElementById("toggleBtn");

let isLightOn = false;

toggleBtn.addEventListener("click", function () {

    if (isLightOn == false) {

        stat.innerText = "Light ON";
        stat.style.color = "green";
        toggleBtn.innerText = "Turn OFF";
        isLightOn = true;

    } else {

        stat.innerText = "Light OFF";
        stat.style.color = "red";
        toggleBtn.innerText = "Turn ON";
        isLightOn = false;
    }

});