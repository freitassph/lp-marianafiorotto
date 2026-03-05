var App = App || {};

document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll('.acc-item');
    if (!accordions.length) return;

    accordions.forEach(acc => {
        const summary = acc.querySelector('.acc-title');

        // Disable default open behavior
        acc.addEventListener('click', (e) => {
            if (e.target.tagName === 'SUMMARY' || e.target.closest('summary')) {
                e.preventDefault();
                toggleAccordion(acc);
            }
        });
    });

    function toggleAccordion(acc) {
        const content = acc.querySelector('.acc-content');
        const isOpen = acc.hasAttribute('open');

        if (isOpen) {
            // Close it
            content.style.height = `${content.scrollHeight}px`;

            // Force reflow
            void content.offsetHeight;

            content.style.height = '0px';
            acc.classList.remove('is-active');

            setTimeout(() => {
                acc.removeAttribute('open');
                content.style.height = '';
            }, 400); // matches CSS transition duration
        } else {
            // Open it
            acc.setAttribute('open', '');
            acc.classList.add('is-active');

            const targetHeight = content.scrollHeight;
            content.style.height = '0px';

            // Force reflow
            void content.offsetHeight;

            content.style.height = `${targetHeight}px`;

            setTimeout(() => {
                content.style.height = 'auto'; // allow it to be responsive
            }, 400);
        }
    }
});
