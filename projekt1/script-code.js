// check for saved "lightMode" in localStorage
let lightMode = localStorage.getItem("lightMode");

const lightModeToggle = document.querySelector("#icon");

const enablelightMode = () => {
    // 1. Add the class to the body
    document.body.classList.add("lightMode");
    icon.src = "bilder/moon.png"
    //logo.src = "bilder/titel_dark.png"
    // 2. Update lightMode in localStorage
    localStorage.setItem("lightMode", "enabled");
}

const disablelightMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove("lightMode");
    icon.src = "bilder/sun.png"
    //logo.src = "bilder/titel.png"
    // 2. Update lightMode in localStorage 
    localStorage.setItem("lightMode", null);
}

// If the user already visited and enabled lightMode
// start things off with it on
if (lightMode === "enabled") {
    enablelightMode();
}

// When someone clicks the button
lightModeToggle.addEventListener("click", () => {
    // get their lightMode setting
    lightMode = localStorage.getItem("lightMode");

    // if it not current enabled, enable it
    if (lightMode !== "enabled") {
        enablelightMode();
        // if it has been enabled, turn it off  
    } else {
        disablelightMode();
    }
});

function openNav() {
    document.getElementById("sideNavi").style.width = "200px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sideNavi").style.width = "0px";
}
