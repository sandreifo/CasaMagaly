const root = document.querySelector(":root");
const width = window.innerWidth;
root.style.setProperty("--headerHeight", `${width*612/1280}px`);

document.querySelector("#menuButton").addEventListener("click", function() {
    console.log("boton")

    document.querySelector(".navigationBarUl").classList.toggle("navigationBarUlResponsive");
})