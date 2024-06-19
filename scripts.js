let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide img');
    if (index >= slides.length) {
        currentSlide = 1; // Vuelve al segundo elemento
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Automatic slide change every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 50000);
