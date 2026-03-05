var App = App || {};

document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    if (!header) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.height = "60px";
            header.style.boxShadow = "var(--shadow-soft)";
        } else {
            header.style.height = "var(--nav-h)";
            header.style.boxShadow = "none";
        }
    });
});
