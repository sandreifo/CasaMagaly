const root = document.querySelector(":root");
const width = window.innerWidth;
root.style.setProperty("--headerWidth", `${width*612/1280}px`);