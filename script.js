// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded');

    // Example: Adding functionality to a button
    const button = document.querySelector('button');
    if (button) {
        button.addEventListener('click', () => {
        });
    }
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');

    // Show/hide button when scrolling
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll to top when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
