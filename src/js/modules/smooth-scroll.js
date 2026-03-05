/* ══════════════════════════════════════════════
   SMOOTH SCROLL MODULE
   ══════════════════════════════════════════════ */

window.App.SmoothScroll = {
    init() {
        this.links = document.querySelectorAll('a[href^="#"]');

        if (!this.links.length) return;

        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();
                    this.scrollToElement(targetElement);

                    // Close mobile menu if open
                    if (window.App.Navbar && window.App.Navbar.overlayMenu.classList.contains('is-open')) {
                        window.App.Navbar.toggleMenu();
                    }
                }
            });
        });
    },

    scrollToElement(element) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offset = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
};
