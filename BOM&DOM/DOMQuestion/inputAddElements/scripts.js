let task = document.getElementById("task");
let add = document.getElementById("add");


add.addEventListener("click", function () {
    let itemDiv = document.createElement("div");

    let list = document.createElement("p")
    list.innerText = task.value;
    if (task.value.trim() === "") {
        return;
    } 

    itemDiv.style.display = "flex";
    itemDiv.style.gap = "10px";
    itemDiv.style.margin = "10px 0 0 0";


    let del = document.createElement("button")
    del.innerText = "delete"

    del.addEventListener("click", function () {
        itemDiv.remove();
    })

    itemDiv.appendChild(list)
    itemDiv.appendChild(del);
    document.body.appendChild(itemDiv);
    task.value = "";

})