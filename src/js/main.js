// Main App Entry
document.addEventListener("DOMContentLoaded", () => {
    console.log("App Inicializado com plugins premium.");

    if (window.App) {
        // Initialize components safely
        if (window.App.Navbar) window.App.Navbar.init();
        if (window.App.ActiveNav) window.App.ActiveNav.init();
        if (window.App.CookieBanner) window.App.CookieBanner.init();
        if (window.App.CursorGlow) window.App.CursorGlow.init();
        if (window.App.FloatingCTA) window.App.FloatingCTA.init();
        if (window.App.SmoothScroll) window.App.SmoothScroll.init();
    }
});
