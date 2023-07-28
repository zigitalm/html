// Smooth scroll on clicking navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        const offset = 100; // Adjust the offset as needed
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition - offset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Hover effect on the CTA button in the home section
const ctaButton = document.querySelector('#home .cta-button');

ctaButton.addEventListener('mouseenter', () => {
    ctaButton.style.backgroundColor = '#ff7f33';
});

ctaButton.addEventListener('mouseleave', () => {
    ctaButton.style.backgroundColor = '#ff6600';
});

// You can use similar logic to implement hover effects for other elements.

// Scroll animations with AOS
AOS.init({
    once: true, // Animation only occurs once on scroll
    offset: 100 // Offset to trigger animations earlier/later as needed
});
