function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const carousel = document.querySelector('.carousel');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const certificateSlides = document.querySelectorAll('.certificate-slide');

  let currentIndex = 0;
  const slideWidth = certificateSlides[0].offsetWidth;

  function showSlide(index) {
    carousel.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  function showNextSlide() {
    currentIndex++;
    if (currentIndex >= certificateSlides.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  function showPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = certificateSlides.length - 1;
    }
    showSlide(currentIndex);
  }

  nextBtn.addEventListener('click', showNextSlide);
  prevBtn.addEventListener('click', showPrevSlide);

  // Auto loop the carousel
  let intervalId;

  function startAutoLoop() {
    intervalId = setInterval(showNextSlide, 3000);
  }

  function stopAutoLoop() {
    clearInterval(intervalId);
  }

  startAutoLoop();

  // Pause auto loop on hover
  carousel.addEventListener('mouseenter', stopAutoLoop);
  carousel.addEventListener('mouseleave', startAutoLoop);