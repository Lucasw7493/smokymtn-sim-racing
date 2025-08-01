document.addEventListener('DOMContentLoaded', () => {
  // ===== HAMBURGER MENU TOGGLE =====
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');

  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isExpanded));
      navList.classList.toggle('nav-open');
    });
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
    }, 5000); // 5 seconds per slide
  }
});
