/* ══════════════════════════════════════════════
   CURSOR GLOW MODULE
   ══════════════════════════════════════════════ */

window.App.CursorGlow = {
    init() {
        // Only initialize for desktop users primarily without touch devices
        if (window.innerWidth <= 768 || window.matchMedia('(hover: none)').matches) return;

        this.cursor = document.querySelector('.cursor-glow');
        if (!this.cursor) return;

        document.addEventListener('mousemove', (e) => {
            // Fast tracked using requestAnimationFrame is smoother, but setting custom property or style direct is ok
            this.cursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
        });

        // Optional: add opacity logic if hovering over buttons
    }
};
