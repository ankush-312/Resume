// typing effect
const dynamicText = document.getElementById("dynamic-text");

const titles = ["Data Analysis...", "Web Developement...","Machine Learning...", "Quant Analysis..."];
let currentTitleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentTitle = titles[currentTitleIndex];
  
  if (isDeleting) {
    // Deleting characters
    dynamicText.textContent = currentTitle.substring(0, currentCharIndex--);
    if (currentCharIndex < 0) {
      isDeleting = false;
      currentTitleIndex = (currentTitleIndex + 1) % titles.length; // Move to the next title
    }
  } else {
    // Typing characters
    dynamicText.textContent = currentTitle.substring(0, currentCharIndex++);
    if (currentCharIndex === currentTitle.length) {
      isDeleting = true; // Start deleting after full title is displayed
    }
  }

  // Adjust typing speed
  const typingSpeed = isDeleting ? 100 : 200; // Faster when deleting
  setTimeout(typeEffect, typingSpeed);
}

// Start the typing effect
typeEffect();















// Select elements
const hamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('close');
const kllu = document.querySelector('.kllu');
const kkuu = document.querySelector('.kkuu');
const mnav = document.querySelector('.mnav');

// Function to toggle the menu
hamburger.addEventListener('click', () => {
  kllu.classList.add('active');
  kkuu.classList.add('active');
  mnav.classList.add('active');

  // Fade out hamburger and show close icon
  hamburger.classList.add('hidden');
  closeIcon.classList.add('active');
});

// Function to close the menu
closeIcon.addEventListener('click', () => {
  kllu.classList.remove('active');
  kkuu.classList.remove('active');
  mnav.classList.remove('active');

  // Fade out close icon and show hamburger
  closeIcon.classList.remove('active');
  hamburger.classList.remove('hidden');
});

