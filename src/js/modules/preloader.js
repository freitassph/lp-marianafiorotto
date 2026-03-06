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

    // Animate out after everything loads or max 1.2s timeout
    const hidePreloader = () => {
        setTimeout(() => {
            preloader.classList.add('is-hidden');
            document.body.style.overflow = '';

            setTimeout(() => {
                preloader.remove();
            }, 800); // Wait for CSS transition
        }, 500); // 500ms guaranteed look at the logo
    };

    window.addEventListener('load', hidePreloader);

    // Fallback if load is slow
    setTimeout(hidePreloader, 2000);
});
