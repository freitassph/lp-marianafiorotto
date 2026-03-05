var App = App || {};

document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('btn-cookie-accept');

    if (cookieBanner && acceptBtn) {
        if (!localStorage.getItem('cookiesAccepted')) {
            setTimeout(() => {
                cookieBanner.classList.add('is-visible');
            }, 1200);
        }

        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.classList.remove('is-visible');
        });
    }
});
