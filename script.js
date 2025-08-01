document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.carousel-slide');
  let currentSlide = 0;

  // Initial setup
  slides[currentSlide].classList.add('active');

  setInterval(() => {
    // Remove 'active' class from current
    slides[currentSlide].classList.remove('active');

    // Increment or loop back to start
    currentSlide = (currentSlide + 1) % slides.length;

    // Add 'active' class to new current
    slides[currentSlide].classList.add('active');
  }, 5000); // 5 seconds per slide
});
