document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links with the class "scroll-link"
  document.querySelectorAll('a.scroll-link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetSection = document.querySelector(link.getAttribute('href'));
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
