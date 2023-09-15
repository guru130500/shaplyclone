const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('active-slide');
    currentSlide = index;
    slides[currentSlide].classList.add('active-slide');
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
    showSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
}

setInterval(nextSlide, 3000);

showSlide(currentSlide);



// for last slider

       const slider = document.querySelector('.slider');
       let scrollInterval;
       
       function scrollRight() {
           const firstSlide = slider.firstElementChild;
           slider.style.transition = 'none';
           slider.appendChild(firstSlide);
           slider.style.transform = 'translateX(25%)';
           setTimeout(() => {
               slider.style.transition = 'transform 0.8s ease-in-out';
               slider.style.transform = 'translateX(0)';
           }, 0);
       }
       
       function autoScroll() {
           scrollInterval = setInterval(scrollRight, 5000); // Change slide every 3 seconds
       }
       
       autoScroll();
