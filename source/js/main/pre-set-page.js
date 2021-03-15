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
  const MIN_WIDTH_TABLET = 768;
  const dropdown = document.querySelector('.header__dropdown');
  const answers = document.querySelectorAll('.questions__elem-js');
  const filter = document.querySelector('.catalog__filter');
  const catalogList = document.querySelector('.catalog__list');
  const catalogListInner = document.querySelector('.catalog__list-inner');
  const catalogBox = document.querySelectorAll('.catalog__list-box');
  const slider = document.querySelector('.slider');
  const sliderInner = document.querySelector('.slider__inner');

  const card = document.querySelector('.card__picture');
  const cardInner = document.querySelector('.card__picture-inner');

  // доп способ проверки названия текущей страницы
  // window.location.toString().indexOf('catalog.htm') > 0

  function preSetPage () {
    // ------ header nav (tablet, mobile) -------
    if (document.documentElement.clientWidth < MIN_WIDTH_DESKTOP) {
      dropdown.classList.remove('header__dropdown--open');
    }

    // ------ accordion questions -------
    if (window.location.pathname === PAGES.index || window.location.pathname === PAGES.start) {
      answers.forEach(elem => {
        elem.classList.add('hide');
      });
    }

    // ------ slider advertisement -------
    if (window.location.pathname === PAGES.index || window.location.pathname === PAGES.start || window.location.pathname === PAGES.card) {
      slider.classList.add('slider--overflow-hidden');
      sliderInner.classList.add('slider__inner--nowrap');
    }

    // ------ slider mobile card pic -------
    if (window.location.pathname === PAGES.card && document.documentElement.clientWidth < MIN_WIDTH_TABLET) {
      card.classList.add('card-slider-overflow-hidden');
      cardInner.classList.add('card-slider-nowrap');
    }

    // ------ catalog filter -------
    if (window.location.pathname === PAGES.catalog) {
        // добвить настройку слайдера каталога
        catalogList.classList.add('catalog-overflow-hidden');
        catalogListInner.style.flexDirection = 'row';
        catalogBox.forEach(elem => {
          elem.classList.add('display-none');
        });

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
