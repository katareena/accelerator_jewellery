'use strict';
(function () {
  // ----------- slider CATALOG ------------
  const PAGES = {
    'start': '/',
    'index': '/index.html',
    'catalog': '/catalog.html',
    'card': '/card.html',
    'authorization': '/authorization.html',
    'added': '/added.html'
  };

  if (window.location.pathname === PAGES.card) {
    let slideIndex = 1;

    function showSlide(n) {
      let i;
      const slides = document.getElementsByClassName('card__picture-item');
      const numberValue = document.querySelector('.pagination-counter__number');
      const totalValue = document.querySelector('.pagination-counter__total');

      if (n > slides.length) {
        slideIndex = 1;
        numberValue.textContent = 1;
        totalValue.textContent = slides.length;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slides[slideIndex - 1].style.display = 'block';
      numberValue.textContent = slideIndex;
      totalValue.textContent = slides.length;
    }

    showSlide(slideIndex);

    function plusSlide(evt) {
      evt.preventDefault();
      showSlide(slideIndex += 1);
    }

    function minusSlide(evt) {
      evt.preventDefault();
      showSlide(slideIndex -= 1);
    }

    // ----------- touch slider CATALOG ------------
    const MIN_WIDTH_TABLET = 768;
    let xDown = null;

    function getTouches(evt) {
      return evt.touches || evt.originalEvent.touches;
    };

    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
    };

    function handleTouchMove(evt) {
      if(window.innerWidth < MIN_WIDTH_TABLET) {
        if (!xDown) {
          return;
        }

        const xUp = evt.touches[0].clientX;
        const xDiff = xDown - xUp;

        if (xDiff> 0) {
          /* left swipe */
          console.log('left');
          plusSlide(evt);
        } else {
          /* right swipe */
          console.log('right');
          minusSlide(evt);
        }
        /* reset values */
        xDown = null;
      }
    };

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
  }

})();
