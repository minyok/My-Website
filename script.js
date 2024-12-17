const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Toggle navbar visibility with animation
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});