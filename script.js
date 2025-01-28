// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Form Submission Alert
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const message = contactForm.querySelector('textarea').value;

  if (name && email && message) {
    alert('Thank you for contacting us! We will get back to you soon.');
    contactForm.reset();
  } else {
    alert('Please fill out all fields.');
  }
});

// Back-to-Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hide Loading Spinner
window.addEventListener('load', () => {
  document.getElementById('loading').style.display = 'none';
});

// GSAP Animations
gsap.from('.hero h2', {
  duration: 1,
  opacity: 0,
  y: -50,
  ease: 'power2.out',
});

gsap.from('.hero p', {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: 'power2.out',
  delay: 0.5,
});

gsap.from('.about', {
  scrollTrigger: '.about',
  opacity: 0,
  y: 50,
  duration: 1,
});

gsap.from('.service-item', {
  scrollTrigger: '.services',
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
});
