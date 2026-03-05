var App = App || {};

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.result-num');

    if (!counters.length) return;

    // Convert strings like "+20k" to target number. But wait, current HTML just has "+".
    // I need to add data-target attributes to the numbers first.
    // For now, I will assume HTML might be updated to:
    // <div class="result-num" data-target="95">0</div><span>%</span>
    // Let's implement a robust spring-like counter.

    const animateCounter = (el) => {
        const target = parseFloat(el.getAttribute('data-target')) || 0;
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';

        const duration = 2000;
        let startTimestamp = null;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // easeOutQuart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            const currentObj = progress === 1 ? target : Math.floor(easeProgress * target);

            el.innerHTML = `${prefix}${currentObj}${suffix}`;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        // If it still has the original "+", it means data-target wasn't added yet, fail gracefully.
        if (counter.hasAttribute('data-target')) {
            observer.observe(counter);
        }
    });
});
