(function () {
  var appBar    = document.getElementById('js-appBar'),
      didScroll = false,
      scrollTop = 0;
  
  window.onscroll = function () {
    didScroll = true;
  }
  
  setInterval(function () {
    if (didScroll) {
      didScroll = false;
      
      // scroll up
      if (window.scrollY <= scrollTop) {
        appBar.classList.add('isFixed');
        appBar.classList.remove('isOffScreen');
      } 
      // scroll down
      else {
        appBar.classList.add('isOffScreen');
      }
    }
    if (window.scrollY == 0) {
      appBar.classList.remove('isFixed');
      appBar.classList.remove('isOffScreen');
    }
    scrollTop = window.scrollY;
  }, 150);
})();