function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

//testing new carousel start

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const certificateSlides = document.querySelectorAll('.certificate-slide');
const slideIndicatorsContainer = document.querySelector('.slide-indicators');

let currentIndex = 0;
const slideWidth = certificateSlides[0].offsetWidth;

function showSlide(index) {
  carousel.style.transform = `translateX(-${index * slideWidth}px)`;
  updateSlideIndicators(index);
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

function updateSlideIndicators(currentIndex) {
  const slideIndicators = document.querySelectorAll('.slide-indicator');
  slideIndicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
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

// Create slide indicators and add event listeners
certificateSlides.forEach((_, index) => {
  const indicator = document.createElement('div');
  indicator.classList.add('slide-indicator');
  indicator.addEventListener('click', () => showSlide(index));
  slideIndicatorsContainer.appendChild(indicator);
});

// Show the initial slide indicator
updateSlideIndicators(currentIndex);

// Touch swipe functionality for mobile devices
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const SWIPE_THRESHOLD = 50;
  const deltaX = touchEndX - touchStartX;

  if (deltaX > SWIPE_THRESHOLD) {
    // Swiped left to right (previous)
    showPrevSlide();
  } else if (deltaX < -SWIPE_THRESHOLD) {
    // Swiped right to left (next)
    showNextSlide();
  }
}

// Function to pause the auto loop
function pauseAutoLoop() {
  stopAutoLoop();
}

// Function to resume the auto loop
function resumeAutoLoop() {
  startAutoLoop();
}

// Pause auto loop when touch starts
carousel.addEventListener('touchstart', pauseAutoLoop);

// Resume auto loop when touch ends
carousel.addEventListener('touchend', resumeAutoLoop);

//testing new carousel end



// const carousel = document.querySelector('.carousel');
//   const prevBtn = document.querySelector('.prev-btn');
//   const nextBtn = document.querySelector('.next-btn');
//   const certificateSlides = document.querySelectorAll('.certificate-slide');

//   let currentIndex = 0;
//   const slideWidth = certificateSlides[0].offsetWidth;

//   function showSlide(index) {
//     carousel.style.transform = `translateX(-${index * slideWidth}px)`;
//   }

//   function showNextSlide() {
//     currentIndex++;
//     if (currentIndex >= certificateSlides.length) {
//       currentIndex = 0;
//     }
//     showSlide(currentIndex);
//   }

//   function showPrevSlide() {
//     currentIndex--;
//     if (currentIndex < 0) {
//       currentIndex = certificateSlides.length - 1;
//     }
//     showSlide(currentIndex);
//   }

//   nextBtn.addEventListener('click', showNextSlide);
//   prevBtn.addEventListener('click', showPrevSlide);

//   // Auto loop the carousel
//   let intervalId;

//   function startAutoLoop() {
//     intervalId = setInterval(showNextSlide, 3000);
//   }

//   function stopAutoLoop() {
//     clearInterval(intervalId);
//   }

//   startAutoLoop();

//   // Pause auto loop on hover
//   carousel.addEventListener('mouseenter', stopAutoLoop);
//   carousel.addEventListener('mouseleave', startAutoLoop);


  document.addEventListener("DOMContentLoaded", function () {
    const desktopNav = document.getElementById("desktop-nav");
    const hamburgerNav = document.getElementById("hamburger-nav");
    const backToTopButton = document.getElementById("back-to-top");
  
    let prevScrollPos = window.pageYOffset;
  
    // Function to show or hide the nav bars based on scroll direction
    function toggleNavVisibility() {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        desktopNav.classList.remove("nav-hidden");
        desktopNav.classList.add("nav-visible");
        hamburgerNav.classList.remove("nav-hidden");
        hamburgerNav.classList.add("nav-visible");
      } else {
        desktopNav.classList.remove("nav-visible");
        desktopNav.classList.add("nav-hidden");
        hamburgerNav.classList.remove("nav-visible");
        hamburgerNav.classList.add("nav-hidden");
      }
      prevScrollPos = currentScrollPos;
  
      // Show or hide the back to top button based on scroll position
      if (currentScrollPos > 300) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    }
  
    // Function to scroll to the top of the page
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  
    // Event listener to show or hide the nav bars on scroll
    window.addEventListener("scroll", toggleNavVisibility);
  
    // Event listener for back to top button
    backToTopButton.addEventListener("click", scrollToTop);
  });
  
