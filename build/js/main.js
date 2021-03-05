'use strict';
(function () {
  const items = document.querySelectorAll('.accordion-item');

  function moveAccordion (trgt) {
    let set = trgt.dataset.set;
    document.querySelector('#' + set).classList.toggle('hide');
    document.querySelector('#btn-' + set).classList.toggle('rotate-btn');
  };

  function clickPressHandler (elem) {
    moveAccordion(elem.currentTarget);
  };

  function enterPressHandler (evt) {
    if (evt.key === 'Enter') {
      moveAccordion(evt.target);
    }
  };

  items.forEach(el => {
    el.addEventListener('click', clickPressHandler);
    el.addEventListener('keydown', enterPressHandler);
  });

})();

'use strict';
(function () {
  const COLOR_ERROR = '#b63616';
  const input = document.querySelector('#subscription-field');
  const submitBtn = document.querySelector('.subscription__btn');
  const message = document.querySelector('#subscription-message');

  function validateInputHandler () {
    if (input.value == '') {
      message.style.color = 'transparent';
      submitBtn.disabled = 'true'
    } else {
      if (!input.value.includes('@') || !input.value.includes('.')) {
        message.style.color = COLOR_ERROR;
        submitBtn.disabled = 'true'
      } else {
        message.style.color = 'transparent';
        submitBtn.disabled = ''
      }
    }
  }

  input.addEventListener('input', validateInputHandler);
})();

'use strict';
(function () {
  const openBtn = document.querySelector('.catalog__filter-open');
  const closeBtn = document.querySelector('.filter__form-close');
  const filter = document.querySelector('.catalog__filter');

  function openFilterHandler() {
    filter.classList.add('catalog__filter--open');
  }

  function closeFilterHandler() {
    filter.classList.remove('catalog__filter--open');
  }

  openBtn.addEventListener('click', openFilterHandler);
  closeBtn.addEventListener('click', closeFilterHandler);

})();

'use strict';
(function () {
  const ESCAPE = 27;
  const headerMenu = document.querySelector('.header__menu');
  const burgerBtn = headerMenu.querySelector('.header__menu-btn--burger-js');
  const basketBtn = document.querySelector('.header__menu-btn--basket-js');
  const logo = headerMenu.querySelector('.header__menu-logo');
  const dropdown = document.querySelector('.header__dropdown');

  function openDropdownHandler () {
    dropdown.classList.toggle('header__dropdown--open');
    dropdown.classList.toggle('header__dropdown--absolute');
    burgerBtn.classList.toggle('header__menu-btn--close');
    headerMenu.classList.toggle('header__menu--dark-theme');
    basketBtn.classList.toggle('header__menu-btn--dark-theme');
    logo.classList.toggle('header__menu-logo--dark-theme');
  }

  function closeEscDropdownHandler (evt) {
    if (evt.keyCode === ESCAPE) {
      if (dropdown.classList.contains('header__dropdown--open')) {
        openDropdownHandler();
      }
    }
  };

  burgerBtn.addEventListener('click', openDropdownHandler);
  document.addEventListener('keydown', closeEscDropdownHandler);

})();

'use strict';
(function () {
  const MAX_TABLET_WIDTH = 1023;
  const dropdown = document.querySelector('.header__dropdown');
  const answers = document.querySelectorAll('.questions__elem-js');
  const filter = document.querySelector('.catalog__filter');

  function preSetPage () {
    if (document.documentElement.clientWidth <= MAX_TABLET_WIDTH) {
      dropdown.classList.remove('header__dropdown--open');
    }

    answers.forEach(elem => {
      elem.classList.add('hide');
    });

    filter.classList.remove('catalog__filter--open');
  }

  window.preSetPage = {
    preSetPage: preSetPage
  }

  document.addEventListener('DOMContentLoaded', preSetPage);
  window.addEventListener('resize', preSetPage);

})();

'use strict';
(function () {
  // var MIN_WIDTH_DESKTOP = 1024;
  // var slides = document.getElementsByClassName('new__slide');
  // var extraDots = document.getElementsByClassName('pagination__item--extra');
  // var slideIndex;
  // var size;

  // function initSlider() {
  //   slideIndex = 1;

  //   for (var i = 0; i < slides.length; i++) {
  //     slides[i].classList.remove('new__slide--active');
  //   }



  //   if (document.documentElement.clientWidth < MIN_WIDTH_DESKTOP) {
  //     size = 2;
  //     for (var i = 0; i < size; i++) {
  //       slides[i].classList.add('new__slide--active');
  //     }
  //     for (var i = 0; i < extraDots.length; i++) {
  //       extraDots[i].classList.remove('pagination__link--hide');
  //     }

  //   } else {
  //     size = 4;
  //     for (var i = 0; i < size; i++) {
  //       slides[i].classList.add('new__slide--active');
  //     }
  //     for (var i = 0; i < extraDots.length; i++) {
  //       extraDots[i].classList.add('pagination__link--hide');
  //     }
  //   }
  // }

  // initSlider();

  // function moveSlides(n) {
  //   var dots = document.getElementsByClassName('pagination__item');

  //   if (n > dots.length) {
  //     slideIndex = 1
  //   }
  //   if (n < 1) {
  //     slideIndex = dots.length
  //   }
  //   for (var i = 0; i < slides.length; i++) {
  //     slides[i].classList.remove('new__slide--active');
  //   }
  //   for (var i = (slideIndex - 1)* size; i < (slideIndex - 1)* size + size; i++) {
  //     slides[i].classList.add('new__slide--active');
  //   }

  //   for (var i = 0; i < dots.length; i++) {
  //     dots[i].classList.remove('pagination__item--active');
  //   }
  //   dots[slideIndex - 1].classList.add('pagination__item--active');
  // }

  // function prevSlide(evt) {
  //   evt.preventDefault();
  //   slideIndex = slideIndex - 1;
  //   moveSlides(slideIndex);
  // }

  // function nextSlide(evt) {
  //   evt.preventDefault();
  //   moveSlides(slideIndex += 1);
  // }

  // var prevBtn = document.querySelector('.new__btn--previous');
  // var nextBtn = document.querySelector('.new__btn--next');

  // prevBtn.addEventListener('click', prevSlide);
  // nextBtn.addEventListener('click', nextSlide);

  // document.addEventListener('DOMContentLoaded', initSlider);
  // window.addEventListener('resize', initSlider);

  // -------- touch slider --------

  // var xDown = null;
  // var yDown = null;

  // function getTouches(evt) {
  //   return evt.touches || evt.originalEvent.touches;
  // };

  // function handleTouchStart(evt) {
  //   var firstTouch = getTouches(evt)[0];
  //   xDown = firstTouch.clientX;
  //   yDown = firstTouch.clientY;
  // };

  // function handleTouchMove(evt) {
  //   if ( ! xDown || ! yDown ) {
  //     return;
  //   }

  //   let xUp = evt.touches[0].clientX;
  //   let yUp = evt.touches[0].clientY;

  //   let xDiff = xDown - xUp;
  //   let yDiff = yDown - yUp;

  //   if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
  //     if ( xDiff > 0 ) {
  //       /* left swipe */
  //       console.log('left');
  //       plusSlide(evt);
  //     } else {
  //       /* right swipe */
  //       console.log('right');
  //       minusSlide(evt);
  //     }
  //   } else {
  //     if ( yDiff > 0 ) {
  //       /* up swipe */
  //       console.log('up');
  //     } else {
  //       /* down swipe */
  //       console.log('down');
  //     }
  //   }
  //   /* reset values */
  //   xDown = null;
  //   yDown = null;
  // };

  // document.addEventListener('touchstart', handleTouchStart, false);
  // document.addEventListener('touchmove', handleTouchMove, false);

})();
