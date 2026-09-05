/**
 * TEK10 — Main JavaScript
 * Core navigation, active page highlighting, mobile menu drawer,
 * accessibility keyboard trapping, and Dark / Light theme switcher.
 */

(function () {
  'use strict';

  // --- 1. Sticky / Scrolled Header ---
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // --- 2. Active Page Highlighting ---
  function highlightActiveNavLink() {
    const currentPath = window.location.pathname.toLowerCase();
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;

      const cleanHref = href.toLowerCase();
      const isHome =
        (cleanHref === 'index.html' || cleanHref === './' || cleanHref === '/') &&
        (currentPath === '' || currentPath === '/' || currentPath.endsWith('index.html'));

      if (isHome || (cleanHref !== 'index.html' && cleanHref !== '/' && currentPath.endsWith(cleanHref))) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  // --- 3. Fullscreen Mobile Navigation Drawer ---
  function initMobileMenu() {
    const burger = document.getElementById('navBurger');
    const menu = document.getElementById('mobileMenu');
    if (!burger || !menu) return;

    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !menu.classList.contains('open');
      burger.classList.toggle('open', isOpen);
      menu.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
      menu.setAttribute('aria-hidden', String(!isOpen));

      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    burger.addEventListener('click', () => toggleMenu());

    // Close when clicking any nav link inside mobile menu
    menu.querySelectorAll('a:not(.theme-toggle)').forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        toggleMenu(false);
        burger.focus();
      }
    });
  }

  // --- 4. Dark Mode & Light Mode Theme Switcher ---
  function initThemeToggle() {
    const themeButtons = document.querySelectorAll('.theme-toggle');
    if (!themeButtons.length) return;

    const getCurrentTheme = () => {
      return document.documentElement.getAttribute('data-theme') || 'dark';
    };

    const setTheme = (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
      try {
        localStorage.setItem('tek10-theme', theme);
      } catch (e) {}

      themeButtons.forEach((btn) => {
        btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        btn.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      });
    };

    themeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextTheme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
      });
    });

    // Initialize aria attributes
    setTheme(getCurrentTheme());
  }

  // Document Ready Initialization
  document.addEventListener('DOMContentLoaded', () => {
    try {
      initHeaderScroll();
      highlightActiveNavLink();
      initMobileMenu();
      initThemeToggle();
    } catch (err) {
      console.error('TEK10 main init error:', err);
    }
  });
})();
