/* ══════════════════════════════════════════════
   COOKIE BANNER MODULE
   ══════════════════════════════════════════════ */

window.App.CookieBanner = {
    init() {
        this.banner = document.querySelector('.cookie-banner');
        this.btnAccept = document.querySelector('.cookie-banner__accept');
        this.btnReject = document.querySelector('.cookie-banner__reject');

        if (!this.banner) return;

        // Show if choice not stored
        if (!localStorage.getItem('cookieConsent_mar_fiorotto')) {
            // Delay showing it directly
            setTimeout(() => this.banner.classList.add('is-visible'), 1500);
        }

        if (this.btnAccept) {
            this.btnAccept.addEventListener('click', () => this.handleConsent('accepted'));
        }

        if (this.btnReject) {
            this.btnReject.addEventListener('click', () => this.handleConsent('rejected'));
        }
    },

    handleConsent(status) {
        localStorage.setItem('cookieConsent_mar_fiorotto', status);
        this.banner.classList.remove('is-visible');

        if (status === 'accepted') {
            // Ideally trigger analytics/tags initialization here
            console.log('Cookies accepted for Analytics.');
        }
    }
};
