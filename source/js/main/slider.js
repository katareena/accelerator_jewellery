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
