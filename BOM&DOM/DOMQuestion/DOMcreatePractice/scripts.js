let btn = document.getElementById("btn");
let count = 1;

btn.addEventListener("click", function () {

    for (let i = 0; i < 5; i++) {

        let studentDiv = document.createElement("div");
        studentDiv.style.display = "flex";
        studentDiv.style.alignItems = "center";
        studentDiv.style.gap = "10px";
        studentDiv.style.margin = "10px";

        let heading = document.createElement("h1");
        heading.innerText = `Student ${count}`;

        let del = document.createElement("button");
        del.innerText = "Delete";

        del.addEventListener("click", function () { 
            studentDiv.remove();
        });
        studentDiv.appendChild(heading);
        studentDiv.appendChild(del);
        document.body.appendChild(studentDiv);
        count++;
    }

});