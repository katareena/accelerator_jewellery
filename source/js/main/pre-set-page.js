'use strict';
(function () {
  const PAGES = {
    'start': '/',
    'index': '/index.html',
    'catalog': '/catalog.html',
    'card': '/card.html',
    'authorization': '/authorization.html',
    'added': '/added.html'
  };
  const MIN_WIDTH_DESKTOP = 1024;
  const dropdown = document.querySelector('.header__dropdown');
  const answers = document.querySelectorAll('.questions__elem-js');
  const filter = document.querySelector('.catalog__filter');

  // доп способ проверки названия текущей страницы
  // window.location.toString().indexOf('catalog.htm') > 0

  function preSetPage () {
    if (document.documentElement.clientWidth < MIN_WIDTH_DESKTOP) {
      dropdown.classList.remove('header__dropdown--open');
    }

    if (window.location.pathname === PAGES.index || window.location.pathname === PAGES.start) {
      answers.forEach(elem => {
        elem.classList.add('hide');
      });
    }

    if (window.location.pathname === PAGES.catalog) {
      if (document.documentElement.clientWidth < MIN_WIDTH_DESKTOP) {
        filter.classList.remove('catalog__filter--open');
      }
    }
  }

  window.preSetPage = {
    preSetPage: preSetPage
  };

  document.addEventListener('DOMContentLoaded', preSetPage);
  window.addEventListener('resize', preSetPage);
})();
