var App = App || {};

document.addEventListener("DOMContentLoaded", () => {
    // Only initialized once
    if (window.preloaderInit) return;
    window.preloaderInit = true;

    const preloader = document.querySelector('.preloader-atmospheric');
    if (!preloader) {
        document.body.style.overflow = '';
        return;
    }

    document.body.style.overflow = 'hidden'; // prevent scrolling

    // Animate out after everything loads or max 800ms timeout to preserve mobile LCP
    const hidePreloader = () => {
        if (!preloader.classList.contains('is-hidden')) {
            setTimeout(() => {
                preloader.classList.add('is-hidden');
                document.body.style.overflow = '';

                setTimeout(() => {
                    preloader.remove();
                }, 600); // 600ms CSS transition
            }, 100); // 100ms guaranteed look at the logo
        }
    };

    window.addEventListener('load', hidePreloader);

    // Fallback if load is slow (very crucial for simulated 4G mobile scoring)
    setTimeout(hidePreloader, 800);
});
