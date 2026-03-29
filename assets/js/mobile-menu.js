// Mobile Menu - Complete Rewrite
(function() {
  'use strict';
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
  
  function initMobileMenu() {
    var toggle = document.querySelector('.mobile-menu-toggle');
    var nav = document.getElementById('primary-menu');
    
    if (!toggle || !nav) {
      console.error('Mobile menu: Missing elements');
      return;
    }
    
    // Toggle function
    function toggleMenu(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      
      var isOpen = nav.classList.contains('is-open');
      
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    }
    
    function openMenu() {
      nav.classList.add('is-open');
      toggle.classList.add('is-active');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    
    // Click handlers
    toggle.addEventListener('click', toggleMenu);
    
    // Close on link click
    var links = nav.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', closeMenu);
    }
    
    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        closeMenu();
      }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu();
      }
    });
    
    // Close on resize to desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 992 && nav.classList.contains('is-open')) {
        closeMenu();
      }
    });
  }
})();
