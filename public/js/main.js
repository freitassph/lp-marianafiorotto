/* ══════════════════════════════════════════════
   UTILS
   ══════════════════════════════════════════════ */

window.App = window.App || {};
window.App.Utils = {
    /**
     * Limit rate of function execution
     */
    throttle(func, limit) {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Delay execution until wait time has passed without calls
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Easing function for smooth animations
     */
    easeOutExpo(x) {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }
};
/* ══════════════════════════════════════════════
   ACCORDION MODULE
   ══════════════════════════════════════════════ */

window.App.Accordion = {
    init() {
        this.accordionItems = document.querySelectorAll('.accordion__item, .card--specialty');

        if (!this.accordionItems.length) return;

        this.accordionItems.forEach(item => {
            const trigger = item.querySelector('.accordion__trigger, .card--specialty__header');
            if (trigger) {
                trigger.addEventListener('click', () => {
                    this.toggleContent(item);
                });
            }
        });

        // Handle Tabs in Desktop for Specialties
        this.tabButtons = document.querySelectorAll('.specialties__tab-btn');
        this.tabPanels = document.querySelectorAll('.specialties__tab-panel');

        if (this.tabButtons.length > 0) {
            this.tabButtons.forEach((btn, index) => {
                btn.addEventListener('click', () => {
                    this.switchTab(index);
                });
            });
        }
    },

    toggleContent(clickedItem) {
        const isSpecialtyMobile = clickedItem.classList.contains('card--specialty');

        // Optionally close other items in the same container.
        // For FAQ usually allow multiple open, but for mobile specialties maybe single open
        if (isSpecialtyMobile) {
            const parentList = clickedItem.closest('.specialties__mobile-accordion');
            if (parentList) {
                const currentlyOpen = parentList.querySelector('.card--specialty.is-open');
                if (currentlyOpen && currentlyOpen !== clickedItem) {
                    currentlyOpen.classList.remove('is-open');
                }
            }
        }

        clickedItem.classList.toggle('is-open');
    },

    switchTab(index) {
        this.tabButtons.forEach(b => b.classList.remove('is-active'));
        this.tabPanels.forEach(p => p.classList.remove('is-active'));

        this.tabButtons[index].classList.add('is-active');
        this.tabPanels[index].classList.add('is-active');
    }
};
/* ══════════════════════════════════════════════
   ACTIVE NAV MODULE (ScrollSpy)
   ══════════════════════════════════════════════ */

window.App.ActiveNav = {
    init() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.navbar__link, .navbar__mobile-link');

        if (!this.sections.length || !this.navLinks.length) return;

        window.addEventListener('scroll', window.App.Utils.throttle(this.handleScroll.bind(this), 100));
    },

    handleScroll() {
        const scrollPosition = window.scrollY + 100; // Offset allowance

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('is-active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('is-active');
                    }
                });
            }
        });
    }
};
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
/* ══════════════════════════════════════════════
   COUNTER MODULE (Animated Statistics)
   ══════════════════════════════════════════════ */

window.App.Counter = {
    init() {
        this.counters = document.querySelectorAll('.card--stat__number');

        if (!this.counters.length) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        this.observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        this.counters.forEach(counter => {
            this.observer.observe(counter);
        });
    },

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'), 10);
        const duration = 2000; // ms
        let startTime = null;

        // Determine target format (e.g. + / %)
        const suffix = element.getAttribute('data-suffix') || '';
        const prefix = element.getAttribute('data-prefix') || '';

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            const percent = Math.min(progress / duration, 1);
            // Use EaseOutExpo for premium feel
            const easedProgress = window.App.Utils.easeOutExpo(percent);

            const currentVal = Math.floor(easedProgress * target);

            element.textContent = `${prefix}${currentVal}${suffix}`;

            if (progress < duration) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = `${prefix}${target}${suffix}`;
            }
        };

        window.requestAnimationFrame(step);
    }
};
/* ══════════════════════════════════════════════
   CURSOR GLOW MODULE
   ══════════════════════════════════════════════ */

window.App.CursorGlow = {
    init() {
        // Only initialize for desktop users primarily without touch devices
        if (window.innerWidth <= 768 || window.matchMedia('(hover: none)').matches) return;

        this.cursor = document.querySelector('.cursor-glow');
        if (!this.cursor) return;

        document.addEventListener('mousemove', (e) => {
            // Fast tracked using requestAnimationFrame is smoother, but setting custom property or style direct is ok
            this.cursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
        });

        // Optional: add opacity logic if hovering over buttons
    }
};
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
/* ══════════════════════════════════════════════
   NAVBAR MODULE
   ══════════════════════════════════════════════ */

window.App.Navbar = {
    init() {
        this.navbar = document.querySelector('.navbar');
        this.burgerBtn = document.querySelector('.navbar__burger');
        this.overlayMenu = document.querySelector('.navbar__overlay');
        this.mobileLinks = document.querySelectorAll('.navbar__mobile-link');

        if (!this.navbar) return;

        this.bindEvents();
        this.handleScroll(); // initial state
    },

    bindEvents() {
        // Scroll event with throttle for performance
        window.addEventListener('scroll', window.App.Utils.throttle(this.handleScroll.bind(this), 100));

        // Mobile menu toggle - use robust click handler
        if (this.burgerBtn && this.overlayMenu) {
            this.burgerBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleMenu();
            });

            // Update aria-expanded for accessibility
            this.burgerBtn.addEventListener('click', () => {
                const isExpanded = this.overlayMenu.classList.contains('is-open');
                this.burgerBtn.setAttribute('aria-expanded', isExpanded);
            });
        }

        // Close mobile menu on link click
        if (this.mobileLinks) {
            this.mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (this.overlayMenu.classList.contains('is-open')) {
                        this.toggleMenu();
                    }
                });
            });
        }
    },

    handleScroll() {
        if (window.scrollY > 80) {
            this.navbar.classList.add('navbar--scrolled');
            this.navbar.classList.remove('navbar--transparent');
        } else {
            this.navbar.classList.remove('navbar--scrolled');
            this.navbar.classList.add('navbar--transparent');
        }
    },

    toggleMenu() {
        const isOpening = !this.overlayMenu.classList.contains('is-open');

        this.burgerBtn.classList.toggle('is-active');
        this.overlayMenu.classList.toggle('is-open');

        // Update aria-expanded
        this.burgerBtn.setAttribute('aria-expanded', isOpening ? 'true' : 'false');

        // Prevent body scroll when menu is open
        if (this.overlayMenu.classList.contains('is-open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
};
/* ══════════════════════════════════════════════
   SCROLL REVEAL MODULE
   ══════════════════════════════════════════════ */

window.App.ScrollReveal = {
    init() {
        this.elements = document.querySelectorAll('.reveal, .reveal--fade-up, .reveal--fade-left, .reveal--fade-right, .reveal--scale, .reveal--stagger');

        // Return early if CSS prefers-reduced-motion is true
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.elements.forEach(el => el.classList.add('is-visible'));
            return;
        }

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.1
        };

        this.observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;

                    // Handle stagger delays if specified by data-delay attribute
                    if (el.dataset.delay) {
                        el.style.transitionDelay = `${el.dataset.delay}ms`;
                    }

                    el.classList.add('is-visible');
                    observer.unobserve(el); // Animate only once
                }
            });
        }, observerOptions);

        this.elements.forEach(el => {
            this.observer.observe(el);
        });
    }
};
/* ══════════════════════════════════════════════
   SMOOTH SCROLL MODULE
   ══════════════════════════════════════════════ */

window.App.SmoothScroll = {
    init() {
        this.links = document.querySelectorAll('a[href^="#"]');

        if (!this.links.length) return;

        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();
                    this.scrollToElement(targetElement);

                    // Close mobile menu if open
                    if (window.App.Navbar && window.App.Navbar.overlayMenu.classList.contains('is-open')) {
                        window.App.Navbar.toggleMenu();
                    }
                }
            });
        });
    },

    scrollToElement(element) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offset = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
};
/* ══════════════════════════════════════════════
   MAIN INITIALIZATION SCRIPT
   ══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    if (window.App) {
        // Initialize components safely
        if (window.App.Navbar) window.App.Navbar.init();
        if (window.App.ScrollReveal) window.App.ScrollReveal.init();
        if (window.App.Accordion) window.App.Accordion.init();
        if (window.App.Counter) window.App.Counter.init();
        if (window.App.FloatingCTA) window.App.FloatingCTA.init();
        if (window.App.SmoothScroll) window.App.SmoothScroll.init();
        if (window.App.ActiveNav) window.App.ActiveNav.init();
        if (window.App.CookieBanner) window.App.CookieBanner.init();
        if (window.App.CursorGlow) window.App.CursorGlow.init();
    }
});
