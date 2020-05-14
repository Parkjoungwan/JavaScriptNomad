const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 74)";
const OTHER_COLOR = "#fffff0";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}


function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}

init();


function handleOffline() {
    console.log("Bye my friend.");
}

function handleOnline() {
    console.log("Welcome back, my friend.");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);