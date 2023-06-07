const root = document.querySelector(":root");
const width = window.innerWidth;
root.style.setProperty("--headerHeight", `${width*612/1280}px`);

document.querySelector("#menuButton").addEventListener("click", function() {
    document.querySelector(".navigationBarUl").classList.toggle("navigationBarUlResponsive");
})

let formulario = document.getElementById("agendaForm");
if (formulario != null) {
formulario.addEventListener('submit', function(e) {
    alert("Gracias por contactarnos, pronto nos comunicaremos contigo.");
})}
else {}
