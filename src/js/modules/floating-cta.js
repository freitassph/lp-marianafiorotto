/* ══════════════════════════════════════════════
   FLOATING CTA MODULE
   ══════════════════════════════════════════════ */

window.App.FloatingCTA = {
    init() {
        this.cta = document.querySelector('.floating-cta');
        this.heroSection = document.querySelector('#hero');
        this.footerSection = document.querySelector('#footer');

        // Only initialize on mobile (or if the element exists)
        if (!this.cta || window.innerWidth > 768) return;

        window.addEventListener('scroll', window.App.Utils.throttle(this.handleScroll.bind(this), 100));
    },

    handleScroll() {
        const scrollY = window.scrollY;

        // Prevent showing CTA immediately on page load implicitly
        // Require scrolling past hero section, typically ~500px or hero offset
        const heroHeight = this.heroSection ? this.heroSection.offsetHeight : 500;

        // Also, hide when reaching footer to avoid overlap
        const footerTop = this.footerSection ? this.footerSection.offsetTop : document.body.scrollHeight;
        const windowBottom = scrollY + window.innerHeight;

        if (scrollY > heroHeight * 0.5 && windowBottom < footerTop + 100) {
            this.cta.classList.add('is-visible');
        } else {
            this.cta.classList.remove('is-visible');
        }
    }
};
