let heading = document.getElementById("heading");
let like = document.getElementById("like")
let unlike = document.getElementById("unlike")

function updateUI() {
    heading.innerText = `❤️ Likes : ${likes}`;

    if (likes === 10) {
        heading.style.color = "gold";
    } else {
        heading.style.color = "red";
    }
}

let likes = 0;

like.addEventListener("click", function(){
    likes = likes+1;
    heading.innerText = `❤️ Likes : ${likes}`
    updateUI();
})

unlike.addEventListener("click", function(){
    if(likes>0){
        likes--
    }
    heading.innerText = `❤️ Likes : ${likes}`
    updateUI();
})