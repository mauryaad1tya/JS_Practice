let heading = document.getElementById("heading");
let hexBtn = document.getElementById("hexBtn");
let box = document.getElementById("box");
let copyBtn = document.getElementById("copyBtn");

let hex = [
    "0","1","2","3","4","5","6","7","8","9",
    "A","B","C","D","E","F"
];

let code ="";

hexBtn.addEventListener("click", function(){
    code = "#";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random()*hex.length);
        let color = hex[randomIndex];
        code += color;
        

    }
    heading.innerText = `The color code is ${code}`
    // document.body.style.backgroundColor = code
    hexBtn.style.backgroundColor = code;
    box.style.backgroundColor = code;
    
})
copyBtn.addEventListener("click", function(){
    navigator.clipboard.writeText(code);
    heading.innerText = `${code} copied`
})