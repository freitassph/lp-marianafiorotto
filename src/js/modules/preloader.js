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

    // Animate out after everything loads or min 2000ms to ensure visibility
    const hidePreloader = () => {
        if (!preloader.classList.contains('is-hidden')) {
            setTimeout(() => {
                preloader.classList.add('is-hidden');
                document.body.style.overflow = '';

                setTimeout(() => {
                    preloader.remove();
                }, 600); // 600ms CSS transition
            }, 2000); // 2 seconds guaranteed visibility
        }
    };

    window.addEventListener('load', hidePreloader);

    // Fallback if load is slow
    setTimeout(hidePreloader, 2600);
});
