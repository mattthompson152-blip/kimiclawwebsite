// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.querySelector('.mobile-menu-toggle');
  var primaryNav = document.getElementById('primary-menu');
  
  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      var isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      primaryNav.classList.toggle('mobile-open');
      document.body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking links
    var navLinks = primaryNav.querySelectorAll('a');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function() {
        menuToggle.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('mobile-open');
        document.body.classList.remove('menu-open');
      });
    }
  }
  
  // FAQ Accordion
  var faqQuestions = document.querySelectorAll('.faq-question');
  for (var j = 0; j < faqQuestions.length; j++) {
    faqQuestions[j].addEventListener('click', function() {
      var isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      // Close all others
      for (var k = 0; k < faqQuestions.length; k++) {
        if (faqQuestions[k] !== this) {
          faqQuestions[k].setAttribute('aria-expanded', 'false');
          faqQuestions[k].nextElementSibling.setAttribute('hidden', '');
        }
      }
      
      // Toggle this one
      this.setAttribute('aria-expanded', !isExpanded);
      if (isExpanded) {
        this.nextElementSibling.setAttribute('hidden', '');
      } else {
        this.nextElementSibling.removeAttribute('hidden');
      }
    });
  }
  
  // Smooth scroll for anchor links
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (var m = 0; m < anchorLinks.length; m++) {
    anchorLinks[m].addEventListener('click', function(e) {
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
