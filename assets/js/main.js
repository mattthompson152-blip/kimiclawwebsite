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
