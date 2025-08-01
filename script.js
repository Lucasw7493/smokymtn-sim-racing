document.addEventListener('DOMContentLoaded', () => {
  // HAMBURGER MENU TOGGLE
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');

  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      navList.classList.toggle('nav-open');
    });
  }

  // IMAGE SLIDESHOW
  const slides = document.querySelectorAll('.carousel-slide');
  let currentSlide = 0;

  if (slides.length > 0) {
    slides[currentSlide].classList.add('active');

    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000);
  }
});
