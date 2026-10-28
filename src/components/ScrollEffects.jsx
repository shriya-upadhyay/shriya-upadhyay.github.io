import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Elements that fade up as they scroll into view
const REVEAL_SELECTOR = [
    '.aboutMe-row',
    '.exp-card',
    '.project_background',
    '.Activity',
    '.writing-card',
].join(', ');

const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function ScrollEffects() {
    const { pathname } = useLocation();

    // Start every page at the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Mark the navbar once the page has scrolled
    useEffect(() => {
        const onScroll = () => {
            document.documentElement.classList.toggle('is-scrolled', window.scrollY > 8);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Reveal cards and sections on scroll, including ones that render late (Medium, GitHub)
    useEffect(() => {
        if (prefersReducedMotion() || !('IntersectionObserver' in window)) return;

        const content = document.getElementById('content');
        if (!content) return;

        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    el.classList.add('revealed');
                    el.dataset.reveal = 'done';
                    io.unobserve(el);
                    // Hand control back to the element's own transitions
                    const delay = parseInt(el.style.getPropertyValue('--reveal-delay'), 10) || 0;
                    window.setTimeout(() => {
                        el.classList.remove('reveal', 'revealed');
                        el.style.removeProperty('--reveal-delay');
                    }, 750 + delay);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        // Tracked per effect run so a re-run (e.g. StrictMode) re-observes pending elements
        const observed = new WeakSet();

        const prepare = () => {
            content.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
                if (observed.has(el) || el.dataset.reveal === 'done') return;
                observed.add(el);
                // Stagger siblings in a row/grid so they cascade in
                const index = Array.prototype.indexOf.call(el.parentElement.children, el);
                el.style.setProperty('--reveal-delay', `${(index % 3) * 90}ms`);
                el.classList.add('reveal');
                io.observe(el);
            });
        };

        prepare();
        const mo = new MutationObserver(prepare);
        mo.observe(content, { childList: true, subtree: true });

        return () => {
            mo.disconnect();
            io.disconnect();
        };
    }, []);

    return null;
}

export default ScrollEffects;
