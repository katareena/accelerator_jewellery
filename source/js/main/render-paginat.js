'use strict';
(function () {
  const PAGES = {
    'start': '/',
    'index': '/index.html',
    'card': '/card.html',
  };

  if (window.location.pathname === PAGES.start || window.location.pathname === PAGES.index || window.location.pathname === PAGES.card) {
    const MIN_WIDTH_DESKTOP = 1024;
    const pinTemplate = document.querySelector('#pin').content.querySelector('.pagination__item');
    const pagination = document.querySelector('.pagination__list');
    const slides = document.querySelectorAll('.slider__item');

    function createPin(n) {
      const fragmentPins = document.createDocumentFragment();
      for (let i = 1; i < ((slides.length + 1)/n); i++) {
        const pinElement = pinTemplate.cloneNode(true);
        pinElement.querySelector('.pagination__link').textContent = `${i}`;
        fragmentPins.appendChild(pinElement);
      }

      pagination.appendChild(fragmentPins);
    };

    function renderPaginationHandler() {
      while (pagination.firstChild) {
        pagination.removeChild(pagination.firstChild);
      }
      if (document.documentElement.clientWidth < MIN_WIDTH_DESKTOP) {
        createPin(2);
      } else {
        createPin(4);
      }
    };

    document.addEventListener('DOMContentLoaded', renderPaginationHandler);
    window.addEventListener('resize', renderPaginationHandler);
  }
})();
