document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links with the class "scroll-link"
  document.querySelectorAll('a.scroll-link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetSection = document.querySelector(link.getAttribute('href'));
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Form submission handling for the "Contact Me" form
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const formDataJson = {};
    formData.forEach((value, key) => {
      formDataJson[key] = value;
    });

    try {
      const response = await fetch('/submit', { // Updated URL to /submit
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataJson)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        contactForm.reset();
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('An error occurred. Please try again later.');
    }
  });
});
