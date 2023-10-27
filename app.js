const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].style.display = "none";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function startCarousel() {
    nextSlide();
}

setInterval(startCarousel, 1500);
showSlide(0);
