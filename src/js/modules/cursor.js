var App = App || {};

document.addEventListener("DOMContentLoaded", () => {
    // Only desktop has custom cursor
    if (window.innerWidth < 1024) return;

    // Create cursor dynamically
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Follow mouse
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.opacity = '1';
    });

    // Ease loop
    const render = () => {
        // LERP (Linear Interpolation) for smooth following
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;

        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
        requestAnimationFrame(render);
    };

    requestAnimationFrame(render);

    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, details');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });

    // Hide when mouse leaves window
    document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
});
