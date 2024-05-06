document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const controls = document.querySelectorAll(".control");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  controls.forEach(control => {
    control.addEventListener("click", function() {
      if (this.classList.contains("prev")) {
        prevSlide();
      } else if (this.classList.contains("next")) {
        nextSlide();
      }
    });
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", function() {
      showSlide(i);
    });
  });

  showSlide(currentIndex);
});