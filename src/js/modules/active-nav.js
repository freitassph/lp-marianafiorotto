/* ══════════════════════════════════════════════
   ACTIVE NAV MODULE (ScrollSpy)
   ══════════════════════════════════════════════ */

window.App.ActiveNav = {
    init() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.navbar__link, .navbar__mobile-link');

        if (!this.sections.length || !this.navLinks.length) return;

        window.addEventListener('scroll', window.App.Utils.throttle(this.handleScroll.bind(this), 100));
    },

    handleScroll() {
        const scrollPosition = window.scrollY + 100; // Offset allowance

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('is-active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('is-active');
                    }
                });
            }
        });
    }
};
