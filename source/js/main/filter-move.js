'use strict';
(function () {
  // --------------- filter move ---------------
  function moveFilter() {
    let catalog;
    if (catalog = document.querySelector('.catalog')) {
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
    }
  }

  window.filterMove = {
    moveFilter: moveFilter
  };
})();
