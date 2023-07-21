// Toggle mobile navigation menu
function toggleMenu() {
    var menu = document.querySelector('.nav-menu');
    var bars = document.querySelectorAll('.bar');
  
    menu.classList.toggle('active');
  
    bars.forEach(function(bar) {
      bar.classList.toggle('change');
    });
  }
  
  
  // Show or hide the navbar on scroll
  var prevScrollpos = window.pageYOffset;
  
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
  
    if (prevScrollpos > currentScrollPos) {
      document.querySelector('header').style.top = '0';
    } else {
      document.querySelector('header').style.top = '-100px';
    }
  
    prevScrollpos = currentScrollPos;
  };
  