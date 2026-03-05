var App = App || {};

document.addEventListener("DOMContentLoaded", () => {
    // Silent Prefetch System
    let prefetchMap = new Set();

    const linksToPrefetch = document.querySelectorAll('a[href^="https://wa.me"]');

    const prefetchUrl = (url) => {
        if (prefetchMap.has(url)) return;

        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        link.as = 'document';
        document.head.appendChild(link);

        // Also preconnect
        const conn = document.createElement('link');
        conn.rel = 'preconnect';
        conn.href = 'https://wa.me';
        document.head.appendChild(conn);

        prefetchMap.add(url);
    };

    linksToPrefetch.forEach(a => {
        // Desktop intent tracking
        a.addEventListener('mouseenter', () => prefetchUrl(a.href));
        // Mobile touch start
        a.addEventListener('touchstart', () => prefetchUrl(a.href), { passive: true });
    });
});
