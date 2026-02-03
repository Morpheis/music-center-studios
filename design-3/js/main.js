/* ============================================================
   Music Center Studios — Design 3: "Elegant & Musical"
   Main JavaScript — Animations, Scroll Effects, Copy Toggle
   ============================================================ */

(function () {
  'use strict';

  /* --- Scroll Reveal (Intersection Observer) --- */
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
  }

  /* --- Treble Clef Divider Animation --- */
  function initTrebleDividers() {
    const clefs = document.querySelectorAll('.treble-divider__clef');
    if (!clefs.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    clefs.forEach((el) => observer.observe(el));
  }

  /* --- Header Scroll Effect --- */
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScroll = 0;

    function onScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        header.classList.add('site-header--scrolled');
        header.classList.remove('site-header--transparent');
      } else {
        header.classList.remove('site-header--scrolled');
        if (header.dataset.transparent === 'true') {
          header.classList.add('site-header--transparent');
        }
      }
      lastScroll = scrollY;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Initial check
  }

  /* --- Mobile Navigation --- */
  function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.mobile-nav__overlay');
    if (!toggle || !mobileNav) return;

    function openNav() {
      toggle.classList.add('nav-toggle--open');
      mobileNav.classList.add('mobile-nav--open');
      if (overlay) overlay.classList.add('mobile-nav__overlay--visible');
      document.body.style.overflow = 'hidden';
    }

    function closeNav() {
      toggle.classList.remove('nav-toggle--open');
      mobileNav.classList.remove('mobile-nav--open');
      if (overlay) overlay.classList.remove('mobile-nav__overlay--visible');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', () => {
      if (mobileNav.classList.contains('mobile-nav--open')) {
        closeNav();
      } else {
        openNav();
      }
    });

    if (overlay) {
      overlay.addEventListener('click', closeNav);
    }

    // Close on link click
    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeNav);
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeNav();
    });
  }

  /* --- Parallax Effect --- */
  function initParallax() {
    const parallaxBgs = document.querySelectorAll('.hero__bg[data-parallax]');
    if (!parallaxBgs.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    function onScroll() {
      const scrollY = window.scrollY;
      parallaxBgs.forEach((bg) => {
        const speed = parseFloat(bg.dataset.parallax) || 0.3;
        bg.style.transform = `translateY(${scrollY * speed}px)`;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* --- Copy Toggle --- */
  function initCopyToggle() {
    const btn = document.querySelector('.copy-toggle-btn');
    if (!btn) return;

    let showOriginal = false;

    btn.addEventListener('click', () => {
      showOriginal = !showOriginal;
      document.body.classList.toggle('show-original-copy', showOriginal);
      btn.classList.toggle('show-original', showOriginal);

      // Brief highlight
      document.body.classList.add('copy-highlight');
      setTimeout(() => {
        document.body.classList.remove('copy-highlight');
      }, 2000);
    });
  }

  /* --- Smooth Scroll for Anchor Links --- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const headerOffset = 90;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      });
    });
  }

  /* --- Active Nav Link --- */
  function initActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.site-nav__link, .mobile-nav__link').forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('site-nav__link--active', 'mobile-nav__link--active');
      }
    });
  }

  /* --- Contact Form Handler --- */
  function initContactForm() {
    const form = document.querySelector('.contact-form form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      // Simulate form submission (replace with actual endpoint)
      setTimeout(() => {
        btn.textContent = 'Message Sent!';
        btn.style.background = '#4CAF50';
        btn.style.color = '#fff';
        form.reset();
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.color = '';
          btn.disabled = false;
        }, 3000);
      }, 1000);
    });
  }

  /* --- Staggered Card Animation --- */
  function initStaggeredCards() {
    const cardGroups = document.querySelectorAll('.card-grid');
    cardGroups.forEach((group) => {
      const cards = group.querySelectorAll('.card, .level-card');
      cards.forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.1}s`;
      });
    });
  }

  /* --- Initialize Everything --- */
  function init() {
    initHeaderScroll();
    initMobileNav();
    initScrollReveal();
    initTrebleDividers();
    initParallax();
    initCopyToggle();
    initSmoothScroll();
    initActiveNavLink();
    initContactForm();
    initStaggeredCards();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
