
// JavaScript to change header style on scroll
window.addEventListener('scroll', function () {
  const header = document.getElementById('mainNav');
  
  // Add 'scrolled' class if the page is scrolled past 50px
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

    // Detect elements on scroll
document.addEventListener('DOMContentLoaded', function () {
    const elementsRight = document.querySelectorAll('.animate-right');
    const elementsLeft = document.querySelectorAll('.animate-left');

    // Check if element is in viewport
    const isInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0;
    };

    const handleScroll = () => {
        elementsRight.forEach((el) => {
            if (isInViewport(el)) {
                el.classList.add('visible');
            }
        });

        elementsLeft.forEach((el) => {
            if (isInViewport(el)) {
                el.classList.add('visible');
            }
        });
    };

    // Run on scroll and on page load
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

const moveUpButton = document.getElementById("moveUp");

// Function to handle the scroll event and screen size
function handleScroll() {
  if (window.scrollY > 150 && window.innerWidth < 1024) { // Adjust 1024px to your desired desktop breakpoint
    moveUpButton.style.display = "flex";
  } else {
    moveUpButton.style.display = "none";
  }
}

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);

// Attach the click event listener for the "Move Up" button
moveUpButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});