// Mobile Menu - Bulletproof Implementation
document.addEventListener('DOMContentLoaded', function() {
  'use strict';
  
  var menuToggle = document.querySelector('.mobile-menu-toggle');
  var primaryNav = document.getElementById('primary-menu');
  var body = document.body;
  
  if (!menuToggle || !primaryNav) {
    console.log('Mobile menu elements not found');
    return;
  }
  
  // Toggle menu function
  function toggleMenu(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    var isOpen = primaryNav.classList.contains('mobile-open');
    
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }
  
  function openMenu() {
    primaryNav.classList.add('mobile-open');
    body.classList.add('menu-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.classList.add('is-active');
  }
  
  function closeMenu() {
    primaryNav.classList.remove('mobile-open');
    body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.classList.remove('is-active');
  }
  
  // Click on hamburger
  menuToggle.addEventListener('click', toggleMenu);
  menuToggle.addEventListener('touchstart', toggleMenu, {passive: false});
  
  // Close when clicking links
  var links = primaryNav.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
      closeMenu();
    });
  }
  
  // Close when clicking outside
  document.addEventListener('click', function(e) {
    if (!primaryNav.contains(e.target) && !menuToggle.contains(e.target)) {
      closeMenu();
    }
  });
  
  // Close on resize to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 1024) {
      closeMenu();
    }
  });
});

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
  var questions = document.querySelectorAll('.faq-question');
  
  for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function() {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      var answer = this.nextElementSibling;
      
      // Close all others
      for (var j = 0; j < questions.length; j++) {
        if (questions[j] !== this) {
          questions[j].setAttribute('aria-expanded', 'false');
          questions[j].nextElementSibling.hidden = true;
        }
      }
      
      // Toggle current
      this.setAttribute('aria-expanded', !expanded);
      answer.hidden = expanded;
    });
  }
});

// Smooth scroll
document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('a[href^="#"]');
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href !== '#') {
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
});
