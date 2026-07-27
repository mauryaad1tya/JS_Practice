let linkedin = document.getElementById("linkedin")
let github = document.getElementById("github")

linkedin.addEventListener("click", function(){
    navigator.clipboard.writeText("https://www.linkedin.com/in/your-profile");
    alert("LinkedIn link copied!");
})
github.addEventListener("click", function () {
    navigator.clipboard.writeText("https://github.com/yourusername");
    alert("GitHub link copied!");
});