let boxes = document.getElementsByClassName("box");

for (let box of boxes) {

    let randomBackgroundColor =
        `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

    let randomTextColor =
        `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

    box.style.backgroundColor = randomBackgroundColor;

    box.style.color = randomTextColor;
}