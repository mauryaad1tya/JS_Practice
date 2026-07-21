let heading = document.getElementById("heading");
let genBtn = document.getElementById("genBtn");

let chars = [
    "A", "B", "C", "D", "E",
    "F", "G", "H", "I", "J",
    "1", "2", "3", "4", "5",
    "6", "7", "8", "9", "0"
];

genBtn.addEventListener("click", function () {
    let license = "";
    for (let i = 0; i < 12; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        let char = chars[randomIndex];
        console.log(char);
        license += char;
        if (i === 3 || i === 7) {
            license += "-";

        }

    }
    heading.innerText = license
})