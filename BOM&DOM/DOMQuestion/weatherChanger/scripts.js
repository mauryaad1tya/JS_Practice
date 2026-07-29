let weather = document.getElementById("weather")
let icons = document.getElementById("icons")
let city = document.getElementById("city")
let temp = document.getElementById("temp")
let change = document.getElementById("change")

change.addEventListener("click", function(){
    icons.innerText= "⛅";
    temp.innerText= "21 C";
    weather.innerText= "Cloudy";
})