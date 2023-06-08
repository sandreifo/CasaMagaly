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

let modal = document.getElementById("modalSlide");
let slideIndex = 1;

function openModal(n){
    modal.style.display = "block";
    currentSlide(n)
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

document.addEventListener("click", e => {
    if (e.target.matches("#modalSlide")){
        modal.style.display = "none";
    }
})

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}