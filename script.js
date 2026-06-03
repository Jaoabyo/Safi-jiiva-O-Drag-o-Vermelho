/* Safi'jiiva — Scripts */

// Navbar solid on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Spawn embers (crimson particles) in the hero
(function spawnEmbers() {
    const container = document.getElementById('particles');
    const siteContainer = document.getElementById('site-particles');
    if (!container && !siteContainer) return;

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 45; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        const size = (0.8 + Math.random() * 2).toFixed(1) + 'px';
        const dx   = (Math.random() > 0.5 ? 1 : -1) * (6 + Math.random() * 20);
        p.style.cssText = [
            `left:  ${(5  + Math.random() * 90).toFixed(1)}%`,
            `top:   ${(30 + Math.random() * 60).toFixed(1)}%`,
            `width: ${size}`,
            `height:${size}`,
            `--dur: ${(6 + Math.random() * 9).toFixed(1)}s`,
            `--del: ${(Math.random() * 10).toFixed(1)}s`,
            `--dx:  ${dx.toFixed(1)}px`,
        ].join(';');
        fragment.appendChild(p);
    }
    // Append to hero container and also to the site-wide container if present
    if (container) container.appendChild(fragment);
    if (siteContainer) siteContainer.appendChild(fragment.cloneNode(true));
})();

// Spawn sapphire particles in the Sapphire section
(function spawnSapphireParticles() {
    const container = document.getElementById('sapphire-particles');
    if (!container) return;

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        const size = (0.8 + Math.random() * 1.8).toFixed(1) + 'px';
        const dx   = (Math.random() > 0.5 ? 1 : -1) * (5 + Math.random() * 15);
        p.style.cssText = [
            `left:  ${(10 + Math.random() * 80).toFixed(1)}%`,
            `top:   ${(20 + Math.random() * 65).toFixed(1)}%`,
            `width: ${size}`,
            `height:${size}`,
            `--dur: ${(7 + Math.random() * 8).toFixed(1)}s`,
            `--del: ${(Math.random() * 9).toFixed(1)}s`,
            `--dx:  ${dx.toFixed(1)}px`,
            // Override color to sapphire
            'background: #2a6aaa',
            'box-shadow: 0 0 6px #1e4e80, 0 0 12px rgba(30,78,128,0.5)',
        ].join(';');
        fragment.appendChild(p);
    }
    container.appendChild(fragment);
})();

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el       = entry.target;
        const siblings = [...el.parentElement.querySelectorAll('[data-reveal]')];
        const index    = siblings.indexOf(el);
        setTimeout(() => el.classList.add('revealed'), index * 120);
        revealObserver.unobserve(el);
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// Active nav highlight
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navAnchors.forEach(a => {
            a.style.color = a.getAttribute('href') === `#${entry.target.id}`
                ? 'var(--text)'
                : '';
        });
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));
