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
      
      if (window.scrollY < scrollTop) {
  			appBar.classList.add('isFixed');
      } else {
        appBar.classList.remove('isFixed');
      }
    }
    if (window.scrollY == 0) {
      appBar.classList.remove('isFixed');
    }
    scrollTop = window.scrollY;
  }, 150);
})();