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
