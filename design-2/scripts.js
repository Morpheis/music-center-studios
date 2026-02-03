/* ========================================
   DESIGN 2: MODERN & BOLD — Scripts
   Music Center Studios
   ======================================== */

(function () {
  'use strict';

  // ---------- DOM READY ----------
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initNav();
    initScrollAnimations();
    initCounters();
    initCopyToggle();
    initParallax();
  }

  // ---------- STICKY NAV ----------
  function initNav() {
    const nav = document.getElementById('mainNav');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    if (!nav || !toggle || !links) return;

    // Scroll behavior
    let lastScroll = 0;
    window.addEventListener('scroll', function () {
      const y = window.scrollY;
      nav.classList.toggle('scrolled', y > 60);
      lastScroll = y;
    }, { passive: true });

    // Mobile toggle
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      links.classList.toggle('open');
      document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('active');
        links.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Active link tracking
    const sections = document.querySelectorAll('section[id]');
    if (sections.length) {
      window.addEventListener('scroll', function () {
        const scrollPos = window.scrollY + 100;
        sections.forEach(function (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;
          const id = section.getAttribute('id');
          const navLink = links.querySelector('a[href="#' + id + '"]');
          if (navLink) {
            navLink.classList.toggle('active', scrollPos >= top && scrollPos < bottom);
          }
        });
      }, { passive: true });
    }
  }

  // ---------- SCROLL ANIMATIONS ----------
  function initScrollAnimations() {
    // Add fade-up class to animatable elements
    const selectors = [
      '.pillar',
      '.program-card',
      '.activity-item',
      '.location-card',
      '.benefit-card',
      '.level-card',
      '.pricing-item',
      '.info-box'
    ];

    selectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el, i) {
        el.classList.add('fade-up');
        el.style.transitionDelay = (i % 3) * 0.1 + 's';
      });
    });

    // IntersectionObserver for reveal
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      });

      document.querySelectorAll('.fade-up').forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback: show all
      document.querySelectorAll('.fade-up').forEach(function (el) {
        el.classList.add('visible');
      });
    }
  }

  // ---------- ANIMATED COUNTERS ----------
  function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    if (!counters.length) return;

    function animateCounter(el) {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const duration = 2000; // ms
      const start = performance.now();

      function step(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      }

      requestAnimationFrame(step);
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      counters.forEach(function (c) { observer.observe(c); });
    } else {
      counters.forEach(animateCounter);
    }
  }

  // ---------- COPY TOGGLE ----------
  function initCopyToggle() {
    const btn = document.getElementById('copyToggle');
    const label = document.getElementById('toggleLabel');
    if (!btn) return;

    let showImproved = false;

    btn.addEventListener('click', function () {
      showImproved = !showImproved;
      btn.classList.toggle('active', showImproved);
      if (label) {
        label.textContent = showImproved ? 'Show Original Copy' : 'Show Improved Copy';
      }

      document.querySelectorAll('.copy-toggle').forEach(function (el) {
        const original = el.getAttribute('data-original');
        const improved = el.getAttribute('data-improved');
        if (original && improved) {
          el.textContent = showImproved ? improved : original;
          // Flash animation
          el.classList.remove('highlight');
          void el.offsetWidth; // force reflow
          el.classList.add('highlight');
        }
      });
    });
  }

  // ---------- PARALLAX (HERO BACKGROUND) ----------
  function initParallax() {
    const heroBg = document.querySelector('.hero-bg:not(.hero-bg-gradient)');
    if (!heroBg) return;

    // Only on desktop — mobile performance
    if (window.innerWidth < 768) return;

    let ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          const y = window.scrollY;
          if (y < window.innerHeight * 1.2) {
            heroBg.style.transform = 'scale(1.05) translateY(' + (y * 0.3) + 'px)';
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

})();
