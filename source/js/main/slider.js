'use strict';
(function () {
  // ----------- slider ------------
  const PAGES = {
    'start': '/',
    'index': '/index.html',
    'catalog': '/catalog.html',
    'card': '/card.html',
    'authorization': '/authorization.html',
    'added': '/added.html'
  };

  if (window.location.pathname === PAGES.start || window.location.pathname === PAGES.index || window.location.pathname === PAGES.card) {
    const MIN_WIDTH_DESKTOP = 1024;
    const MIN_WIDTH_TABLET = 768;
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider__item');
    const innerSlider = document.querySelector('.slider__inner');
    const sliderWidth = document.querySelector('.slider').offsetWidth;
    const nextBtn = document.querySelector('.advertisement__btn--next');
    const prevBtn = document.querySelector('.advertisement__btn--previous');
    const dots = document.querySelector('.pagination__list').childNodes;

    const numberValue = document.querySelector('.pagination-counter__number');
    const totalValue = document.querySelector('.pagination-counter__total');

    const widthArray = [];
    let innerSliderWidth = 0;
    let offset = 0; //сдвиг слева
    let step = 0; //шаги сдвига
    let remains = 0; //сдвиг справа
    // sliderWidth - ширина телевизора
    // innerSliderWidth - ширина всей линии слайдов

    function setWidthinnerSlider() {
      for (let i = 0; i < slides.length; i++) {
        widthArray.push(slides[i].offsetWidth);
        innerSliderWidth += slides[i].offsetWidth;
      }
    };
    setWidthinnerSlider();

    function movePrev(n) {
      remains = innerSliderWidth - sliderWidth - (offset + widthArray[step]*n);
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('pagination__item--active');
      }

      if (offset > 0) {
        offset = offset - widthArray[step]*n;
        innerSlider.style.left = -offset + 'px';
        dots[(dots.length - 1) - (step + 1)].classList.add('pagination__item--active');

      } else {
        innerSlider.style.left = -(innerSliderWidth - sliderWidth) + 'px';
        offset = (innerSliderWidth - sliderWidth);
        remains = 0;
        step = -1;
        dots[dots.length - 1].classList.add('pagination__item--active');
      }

      if (step + 1 == slides.length) {
        offset = 0;
        step = 0;
      } else {
        step++;
      }
    }

    function moveNext(n) {
      remains = innerSliderWidth - sliderWidth - (offset + widthArray[step]*n);
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('pagination__item--active');
      }

      if (remains >= 0) {
        offset = offset + widthArray[step]*n;
        innerSlider.style.left = -offset + 'px';
        dots[step + 1].classList.add('pagination__item--active');

      } else {
        innerSlider.style.left = 0 + 'px';
        offset = 0;
        step = -1;
        dots[step + 1].classList.add('pagination__item--active');
      }

      if (step + 1 == slides.length) {
        offset = 0;
        step = 0;
      } else {
        step++;
      }
    }

    prevBtn.addEventListener('click', function () {
      if (document.documentElement.clientWidth < MIN_WIDTH_DESKTOP) {
        movePrev(2);
      } else {
        movePrev(4);
      }
    });

    nextBtn.addEventListener('click', function () {
      if (document.documentElement.clientWidth < MIN_WIDTH_DESKTOP) {
        moveNext(2);
      } else {
        moveNext(4);
      }
    });

  // ----------- touch slider ------------
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
          moveNext(2);
        } else {
          /* right swipe */
          console.log('right');
          movePrev(2);
        }
        /* reset values */
        xDown = null;
      }
    };

    slider.addEventListener('touchstart', handleTouchStart, false);
    slider.addEventListener('touchmove', handleTouchMove, false);
  }
})();
