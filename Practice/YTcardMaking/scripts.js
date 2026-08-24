let vidTitle = document.getElementById("vidTitle");
let vidCreator = document.getElementById("vidCreator");
let vidViews = document.getElementById("vidViews");
let vidDate = document.getElementById("vidDate");
let vidLength = document.getElementById("vidLength");
let thumbnail = document.getElementById("thumbnail");

function video(title, cName, views, date, duration, thumbnailUrl) {
    vidTitle.innerText = title;
    vidCreator.innerText = cName;
    vidViews.innerText = views;
    vidDate.innerText = date;
    vidLength.innerText = duration;

    thumbnail.innerHTML = `<img src="${thumbnailUrl}" alt="Video thumbnail">`;
}

video(
    "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73",
    "Harry",
    750,
    new Date().toLocaleDateString("en-IN"),
    "31:20",
    "https://i.ytimg.com/an_webp/CO_DAXswOrc/mqdefault_6s.webp?du=3000&sqp=CNTtrtQG&rs=AOn4CLCx2gBtRxVHT7_bJrwfi_cOWDCNEg"
);