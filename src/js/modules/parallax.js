var App = App || {};

document.addEventListener("DOMContentLoaded", () => {
    // Basic parallax effect for images with [data-parallax]
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (!parallaxElements.length) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-parallax') || 0.15;
            // Move item up as you scroll down
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }, { passive: true });
});
