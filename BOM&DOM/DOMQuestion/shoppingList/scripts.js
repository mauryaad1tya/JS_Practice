let add = document.getElementById("add");

let count = 1;

add.addEventListener("click", function () {

    let itemsDiv = document.createElement("div");

    let addBtn = document.createElement("p");
    addBtn.innerText = `Milk ${count}`;

    itemsDiv.style.display = "flex";
    itemsDiv.style.gap = "20px";
    itemsDiv.style.margin = "10px 0 0 0";

    let del = document.createElement("button");
    del.innerText = "Delete";

    del.addEventListener("click", function () {
        itemsDiv.remove();
    });

    itemsDiv.appendChild(addBtn);
    itemsDiv.appendChild(del);

    document.body.appendChild(itemsDiv);

    count++;

});