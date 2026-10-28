// Active Link Highlighting on Scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-btn');

  window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
});

// Contact Form Handler
function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Salamat, ${name}! Naisumite na ang iyong mensahe.`);
  document.getElementById('contactForm').reset();
}
