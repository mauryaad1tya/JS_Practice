let btn = document.getElementById("btn");

btn.addEventListener("click", function(){

    let heading = document.createElement("h1");

    heading.innerText = "Hello World!";

    document.body.appendChild(heading);

});