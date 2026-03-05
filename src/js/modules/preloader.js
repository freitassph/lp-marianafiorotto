var App = App || {};

document.addEventListener("DOMContentLoaded", () => {
    // Only initialized once
    if (window.preloaderInit) return;
    window.preloaderInit = true;

    // Create Preloader dynamically
    const preloader = document.createElement('div');
    preloader.className = 'preloader-atmospheric';

    // Contains just the logo
    preloader.innerHTML = `
        <div class="preloader-curtain"></div>
        <img src="/assets/logos/logo-symbol-01.png" alt="Dra. Mariana Fiorotto" class="preloader-logo">
    `;

    document.body.prepend(preloader);
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
