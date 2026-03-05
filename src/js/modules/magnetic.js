var App = App || {};

document.addEventListener("DOMContentLoaded", () => {
    // Only desktop
    if (window.innerWidth < 1024) return;

    const magneticBtns = document.querySelectorAll('.btn');

    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            // Calculate center
            const h = rect.width / 2;
            const v = rect.height / 2;

            // Mouse position relative to center of button (-1 to 1)
            const cx = (e.clientX - rect.left - h) / h;
            const cy = (e.clientY - rect.top - v) / v;

            // Move item up to 10px in any direction
            const moveX = cx * 10;
            const moveY = cy * 5;

            btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });
});
