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

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for reaching out to JJuff! We will get back to you shortly.");
});

 // Initialize and add the map
        function initMap() {
            // The location of the desired place (e.g., New York City)
            const location = { lat: 40.7128, lng: -74.0060 };
            
            // The map, centered at the location
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 10,
                center: location,
            });
          }
            
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

