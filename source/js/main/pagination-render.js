'use strict';
(function () {
  const PAGES = {
    'start': '/',
    'index': '/index.html',
    'card': '/card.html',
  };

  if (window.location.pathname === PAGES.start || window.location.pathname === PAGES.index || window.location.pathname === PAGES.card) {
    const MIN_WIDTH_DESKTOP = 1024;
    const MIN_WIDTH_TABLET = 768;
    const dotTemplate = document.querySelector('#dot').content.querySelector('.pagination__item');
    const pagination = document.querySelector('.pagination__list');
    const slides = document.querySelectorAll('.slider__item');

    function createDots(n) {
      const fragmentDots = document.createDocumentFragment();
      for (let i = 1; i < ((slides.length + 1)/n); i++) {
        const dotElement = dotTemplate.cloneNode(true);
        if (i == 1) {
          dotElement.classList.add('pagination__item--active');
        }
        dotElement.querySelector('.pagination__link').textContent = `${i}`;
        fragmentDots.appendChild(dotElement);
      }
      pagination.appendChild(fragmentDots);
    };

      function renderPaginationHandler() {
      while (pagination.firstChild) {
        pagination.removeChild(pagination.firstChild);
      }

      // if (document.documentElement.clientWidth >= MIN_WIDTH_TABLET) {
        if (document.documentElement.clientWidth < MIN_WIDTH_DESKTOP) {
          createDots(2);
        } else {
          createDots(4);
        }
      // } else {
      //   return;
      // }
    };

    document.addEventListener('DOMContentLoaded', renderPaginationHandler);
    window.addEventListener('resize', renderPaginationHandler);
  }
})();
