let heading = document.getElementById("heading");
let clickBtn = document.getElementById("clickBtn")

let emojis = [
    "😀",
    "😎",
    "🥳",
    "😴",
    "🤯",
    "😡",
    "😂"
];

let messages = [
    "Happy",
    "Cool",
    "Party Time",
    "Sleepy",
    "Mind Blown",
    "Angry",
    "Laughing"
];

let colors = [
    "yellow",
    "blue",
    "green",
    "gray",
    "purple",
    "red",
    "orange"
];

clickBtn.addEventListener("click", function(){
    let emojirandom = Math.floor(Math.random() * emojis.length);
    let emoji = emojis[emojirandom];
    let message = messages[emojirandom];
    let color = colors[emojirandom];

    heading.innerText = `${emoji}
    ${message}`
    heading.style.color = color
})