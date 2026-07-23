let addCounter = document.getElementById("addCounter");
let counterCount = 1;


addCounter.addEventListener("click", function () {
    let currentCounter = counterCount;
    let countDiv = document.createElement("div")
    countDiv.style.display = "flex"
    countDiv.style.gap = "5px"
    countDiv.style.margin = "5px"

    let count = 1;


    let counter = document.createElement("p")
    counter.innerText = `Counter ${currentCounter} : ${count} `

    let plusBtn = document.createElement("button")
    plusBtn.innerText = "+"

    plusBtn.addEventListener("click", function () {
        count++
        counter.innerText = `Counter ${currentCounter} : ${count}`
    })

    let minusBtn = document.createElement("button")
    minusBtn.innerText = "-"

    minusBtn.addEventListener("click", function () {
        count--;
        counter.innerText = `Counter ${currentCounter} : ${count}`;
    });

    let del = document.createElement("button");
    del.innerText = "Delete"

    del.addEventListener("click", function () {
        countDiv.remove();
    })

    countDiv.appendChild(counter)
    countDiv.appendChild(plusBtn)
    countDiv.appendChild(minusBtn)
    countDiv.appendChild(del)
    document.body.appendChild(countDiv)
    counterCount++;
})