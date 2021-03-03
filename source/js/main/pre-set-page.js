'use strict';
(function () {
  const MAX_TABLET_WIDTH = 1023;
  const dropdown = document.querySelector('.header__dropdown');
  const answers = document.querySelectorAll('.questions__elem-js');

  function preSetPage () {
    if (document.documentElement.clientWidth <= MAX_TABLET_WIDTH) {
      dropdown.classList.remove('header__dropdown--open');
    }

    answers.forEach(elem => {
      elem.classList.add('hide');
    });
  }

  window.preSetPage = {
    preSetPage: preSetPage
  }

  document.addEventListener('DOMContentLoaded', preSetPage);
  window.addEventListener('resize', preSetPage);

})();
