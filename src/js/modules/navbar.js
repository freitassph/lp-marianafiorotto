/* ══════════════════════════════════════════════
   NAVBAR MODULE
   ══════════════════════════════════════════════ */

window.App.Navbar = {
    init() {
        this.navbar = document.querySelector('.navbar');
        this.burgerBtn = document.querySelector('.navbar__burger');
        this.overlayMenu = document.querySelector('.navbar__overlay');
        this.mobileLinks = document.querySelectorAll('.navbar__mobile-link');

        if (!this.navbar) return;

        this.bindEvents();
        this.handleScroll(); // initial state
    },

    bindEvents() {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    },

    handleScroll() {
        if (window.scrollY > 80) {
            this.navbar.classList.add('navbar--scrolled');
            this.navbar.classList.remove('navbar--transparent');
        } else {
            this.navbar.classList.remove('navbar--scrolled');
            this.navbar.classList.add('navbar--transparent');
        }
    },

    toggleMenu() {
        this.burgerBtn.classList.toggle('is-active');
        this.overlayMenu.classList.toggle('is-open');

        // Prevent body scroll when menu is open
        if (this.overlayMenu.classList.contains('is-open')) {
            document.documentElement.classList.add('lenis-stopped');
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none'; // Lock scroll on mobile
            const wppBtn = document.querySelector('.floating-whatsapp');
            if (wppBtn) wppBtn.style.display = 'none';
        } else {
            document.documentElement.classList.remove('lenis-stopped');
            document.body.style.overflow = '';
            document.body.style.touchAction = ''; // Keep scroll
            const wppBtn = document.querySelector('.floating-whatsapp');
            if (wppBtn) wppBtn.style.display = '';
        }
    }
};
