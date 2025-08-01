document.addEventListener('DOMContentLoaded', () => {
  // ===== HAMBURGER MENU TOGGLE =====
  const hamburger = document.getElementById('menuToggle');
  const nav = document.getElementById('navbarMenu');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    // Always start closed
    nav.classList.remove('open');
  }

  // ===== IMAGE SLIDESHOW =====
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
