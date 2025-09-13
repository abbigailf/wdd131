document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('primary-nav');
    const yearEl = document.getElementById('currentyear');
    const lastModEl = document.getElementById('lastModified');

    const currentYear = new Date().getFullYear();
    yearEl.textContent = currentYear;

    lastModEl.textContent = document.lastModified || 'Unknown';

    function toggleNav(open) {
        const isOpen = typeof open === 'boolean' ? open : !nav.classList.contains('open');
        if (isOpen) {
            nav.classList.add('open');
            hamburger.setAttribute('aria-expanded', 'true');
            hamburger.setAttribute('aria-label', 'Close navigation');
            hamburger.innerHTML = '<span aria-hidden="true">✕</span>';
        } else {
            nav.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.setAttribute('aria-label', 'Open navigation');
            hamburger.innerHTML = '<span class="hamburger-line" aria-hidden="true"></span><span class="hamburger-line" aria-hidden="true"></span><span class="hamburger-line" aria-hidden="true"></span>';
        }
    }

    if (hamburger && nav) {
        if (!hamburger.innerHTML.trim()) {
            toggleNav(false);
        }

        hamburger.addEventListener('click', function () {
            toggleNav();
        });

        document.addEventListener('click', function (e) {
            if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('open')) {
                toggleNav(false);
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && nav.classList.contains('open')) {
                toggleNav(false);
                hamburger.focus();
            }
        });

        let resizeTimer;
        window.addEventListener('resize', function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                if (window.matchMedia('(min-width:760px)').matches) {
                    nav.classList.remove('open');
                    hamburger.setAttribute('aria-expanded', 'false');
                    hamburger.innerHTML = '<span class="hamburger-line" aria-hidden="true"></span><span class="hamburger-line" aria-hidden="true"></span><span class="hamburger-line" aria-hidden="true"></span>';
                }
            }, 150);
        }, { passive: true });
    }
});