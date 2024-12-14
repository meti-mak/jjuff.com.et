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

// Run the handler once on load to ensure proper visibility
handleScroll();