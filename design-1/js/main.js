/* =========================================
   Music Center Studios — Design 1: Warm & Playful
   Main JavaScript
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollEffects();
  initCopyToggle();
  initContactForm();
  initScrollReveal();
});

/* ---------- Navigation ---------- */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  // Hamburger toggle
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile nav on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Header shadow on scroll
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ---------- Scroll Effects ---------- */
function initScrollEffects() {
  // Parallax-like effect on hero (subtle)
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    }, { passive: true });
  }
}

/* ---------- Copy Toggle ---------- */
function initCopyToggle() {
  const btn = document.querySelector('.copy-toggle-btn');
  if (!btn) return;

  let mode = 'improved'; // Default to improved copy
  document.body.setAttribute('data-copy-mode', mode);

  btn.addEventListener('click', () => {
    mode = mode === 'original' ? 'improved' : 'original';
    document.body.setAttribute('data-copy-mode', mode);

    // Update button text
    const label = btn.querySelector('.toggle-label');
    if (label) {
      label.textContent = mode === 'original' ? 'Show improved copy' : 'Show original copy';
    }

    // Toggle button style
    btn.classList.toggle('improved', mode === 'improved');

    // Subtle flash on toggled elements
    document.querySelectorAll('.copy-original, .copy-improved').forEach(el => {
      if (el.style.display !== 'none') {
        el.style.transition = 'background 0.5s';
        el.style.background = 'rgba(253,184,19,0.15)';
        setTimeout(() => { el.style.background = 'transparent'; }, 600);
      }
    });
  });
}

/* ---------- Contact Form ---------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const message = form.querySelector('[name="message"]');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      showFormMessage('Please fill in all required fields.', 'error');
      return;
    }

    if (!isValidEmail(email.value)) {
      showFormMessage('Please enter a valid email address.', 'error');
      return;
    }

    // In a real site this would submit to a backend or Netlify Forms
    showFormMessage('Thanks for reaching out! We\'ll get back to you soon. 🎵', 'success');
    form.reset();
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormMessage(text, type) {
  // Remove any existing message
  const existing = document.querySelector('.form-message');
  if (existing) existing.remove();

  const msg = document.createElement('div');
  msg.className = `form-message form-message-${type}`;
  msg.textContent = text;
  msg.style.cssText = `
    padding: 0.85rem 1.25rem;
    border-radius: 8px;
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 0.9rem;
    margin-top: 1rem;
    ${type === 'success'
      ? 'background: rgba(46,196,182,0.12); color: #239E93; border: 1px solid rgba(46,196,182,0.3);'
      : 'background: rgba(244,132,95,0.12); color: #c0392b; border: 1px solid rgba(244,132,95,0.3);'
    }
  `;

  const form = document.getElementById('contact-form');
  form.appendChild(msg);

  // Auto-remove after 5s
  setTimeout(() => msg.remove(), 5000);
}

/* ---------- Scroll Reveal ---------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ---------- Smooth scroll for anchor links ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
