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

  if (window.location.pathname === PAGES.catalog) {
    const nextBtn = document.querySelector('.slider-btn-next');
    const prevBtn = document.querySelector('.slider-btn-prev');
    let slideIndex = 1;

    function showSlide(n) {
      let i;
      const slides = document.getElementsByClassName('catalog__list-box');
      const dots = document.getElementsByClassName('pagination__item');

      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('catalog__list-box--active');
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('pagination__item--active');
      }
      slides[slideIndex - 1].classList.add('catalog__list-box--active');
      dots[slideIndex - 1].classList.add('pagination__item--active');
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

    prevBtn.addEventListener('click', minusSlide);
    nextBtn.addEventListener('click', plusSlide);

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
