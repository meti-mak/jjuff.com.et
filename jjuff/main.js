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
  // count down 

    function updateCountdown() {
      const now = new Date();
      let target = new Date();

      // Set the target to the next Friday at 18:30
      target.setDate(target.getDate() + (5 - target.getDay() + 7) % 7); // Friday
      target.setHours(18, 30, 0, 0);

      // If it's already Friday past 18:30, target the next Friday
      if (now > target) {
        target.setDate(target.getDate() + 7);
      }

      const diff = target - now; // Milliseconds until the next target
      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
      const days = Math.floor(diff / 1000 / 60 / 60 / 24);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

 

 // JavaScript to toggle the visibility of extra content
    document.getElementById("readMoreCity").addEventListener("click", function() {
      var fullInfo = document.getElementById("cityFullInfo");
      fullInfo.style.display = (fullInfo.style.display === "none" || fullInfo.style.display === "") ? "block" : "none";
      this.innerText = (fullInfo.style.display === "none") ? "Read More" : "Read Less";
    });

    document.getElementById("readMoreJju").addEventListener("click", function() {
      var fullInfo = document.getElementById("jjuFullInfo");
      fullInfo.style.display = (fullInfo.style.display === "none" || fullInfo.style.display === "") ? "block" : "none";
      this.innerText = (fullInfo.style.display === "none") ? "Read More" : "Read Less";
    });

const moveUpButton = document.getElementById("moveUp");

// Function to handle the scroll event and screen size
function handleScroll() {
  if (window.scrollY > 50 && window.innerWidth < 1024) { // Adjust 1024px to your desired desktop breakpoint
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
// Day data with programs for each day
const days = [
  {
      day: "Tuesday",
      programs: [
          { icon: "bi bi-file-text", text: "Out Reach" },
          { icon: "bi bi-clock", text: "5:30 PM" },
          { icon: "bi bi-building", text: "Assembly Of God Church" }
      ]
  },
  {
      day: "Wednesday",
      programs: [
          { icon: "bi bi-file-text", text: "Prayer Meeting" },
          { icon: "bi bi-clock", text: "6:00 PM" },
          { icon: "bi bi-building", text: "Community Center" }
      ]
  },
  {
      day: "Thursday",
      programs: [
          { icon: "bi bi-file-text", text: "Bible Study" },
          { icon: "bi bi-clock", text: "7:00 PM" },
          { icon: "bi bi-building", text: "Assembly Of God Church" }
      ]
  }
];

let currentIndex = 0; // Track the current day index

// Cache DOM elements
const container = document.getElementById("programContainer");
const navigationDots = document.querySelectorAll(".navigation span");

// Function to render programs based on the current day
function renderPrograms() {
  container.classList.add("fade-out"); // Add fade-out class before changing content

  // Wait for fade-out to finish before changing content
  setTimeout(() => {
      container.innerHTML = ''; // Clear existing content

      const dayHeader = document.createElement("div");
      dayHeader.className = "program-day";
      dayHeader.textContent = days[currentIndex].day;
      container.appendChild(dayHeader);

      // Generate program list for the current day
      days[currentIndex].programs.forEach(program => {
          const programItem = document.createElement("div");
          programItem.className = "program-item d-flex justify-content-center";
          programItem.innerHTML = `<i class="${program.icon}"></i><span>${program.text}</span>`;
          container.appendChild(programItem);
      });

      // Update navigation dots
      updateNavigationDots();

      container.classList.remove("fade-out"); // Remove fade-out class and trigger fade-in
  }, 300); // Time should match the fade-out duration (adjust as needed)
}

// Function to update navigation dots based on the current day index
function updateNavigationDots() {
  navigationDots.forEach((dot, index) => {
      dot.className = index === currentIndex ? "active" : "inactive";
  });
}

// Function to navigate to the previous day
function goToPrevDay() {
  currentIndex = (currentIndex === 0) ? days.length - 1 : currentIndex - 1;
  renderPrograms();
}

// Function to navigate to the next day
function goToNextDay() {
  currentIndex = (currentIndex === days.length - 1) ? 0 : currentIndex + 1;
  renderPrograms();
}

// Event listeners for navigation buttons
document.getElementById("prevDay").addEventListener("click", goToPrevDay);
document.getElementById("nextDay").addEventListener("click", goToNextDay);

// Smooth scrolling to the top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Initial rendering of programs
renderPrograms();


// Event listeners for navigation buttons with animation
document.getElementById("prevDay").addEventListener("click", () => {
     currentIndex = (currentIndex === 0) ? days.length - 1 : currentIndex - 1;
          renderPrograms();
});

document.getElementById("nextDay").addEventListener("click", () => {
    currentIndex = (currentIndex === days.length - 1) ? 0 : currentIndex + 1;
          renderPrograms();
});

// Smooth scrolling to the top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Function to animate navigation (dots and buttons)
function animateNavigation() {
  const navigation = document.querySelector(".navigation");
  // Add a class for the animation
  navigation.classList.add("fade-out");

  // Wait for the animation to end, then update the dots and remove the animation class
  setTimeout(() => {
      renderPrograms();
      navigation.classList.remove("fade-out");
  }, 300); // Adjust time based on the animation duration
}

       
// Define the start year and current year
const startYear = 2020; // Example: The year when the counter started
const currentYear = new Date().getFullYear();

// Calculate the total number of members based on the yearly addition
const initialMembers = 600; // Members at the start
const yearlyAddition = 30;
const totalYears = currentYear - startYear;
const updatedMembers = initialMembers + (totalYears * yearlyAddition);

// Update the "Members" counter target
const memberCounter = document.querySelector('.counter-container-1 .counter:nth-child(3) .count');
if (memberCounter) {
  memberCounter.setAttribute('data-target', updatedMembers);
}

// Counter animation logic
const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 100;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target; // Ensure it ends at the target value
    }
  };

  updateCounter();
});



//  <!-- JavaScript to handle the button click event -->
  
        document.getElementById('readMoreCity1').addEventListener('click', function() {
            // Redirect to another page (change the URL to the desired page)
            window.location.href = '/jjuff/about-city.html'; // Replace with your target page
        });

  document.getElementById('readMoreJju1').addEventListener('click', function() {
            // Redirect to another page (change the URL to the desired page)
            window.location.href = 'https://www.example.com'; // Replace with your target page
        });


