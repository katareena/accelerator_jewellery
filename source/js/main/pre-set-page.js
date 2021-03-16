'use strict';
(function () {
// --------------- preSet all elements, all pages ---------------
  const MIN_WIDTH_DESKTOP = 1024;
  const MIN_WIDTH_TABLET = 768;

  function preSetHeader() {
    const dropdown = document.querySelector('.header__dropdown');
    if (document.documentElement.clientWidth < MIN_WIDTH_DESKTOP) {
      dropdown.classList.remove('header__dropdown--open');
    }
  };

  function preSetSliderAdvertisement() {
    let slider;
    if (slider = document.querySelector('.slider')) {
      const sliderInner = slider.querySelector('.slider__inner');
      slider.classList.add('slider--overflow-hidden');
      sliderInner.classList.add('slider__inner--nowrap');
    }
  }

  function preSetSliderCard() {
    let card;
    if (card = document.querySelector('.card__picture') && document.documentElement.clientWidth < MIN_WIDTH_TABLET) {
      const cardInner = card.querySelector('.card__picture-inner');
      card.classList.add('card-slider-overflow-hidden');
      cardInner.classList.add('card-slider-nowrap');
    }
  }

  function preSetIndex() {
    let answers;
    if (answers = document.querySelectorAll('.questions__elem-js')) {
      answers.forEach(elem => {
        elem.classList.add('hide');
      });
    }
  }

  function preSetFilter() {
    let catalog;
    if (catalog = document.querySelector('.catalog')) {
      const filter = catalog.querySelector('.catalog__filter');
      const catalogList = catalog.querySelector('.catalog__list');
      const catalogListInner = catalog.querySelector('.catalog__list-inner');
      const catalogBox = catalog.querySelectorAll('.catalog__list-box');

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

  function preSetPagesHandler() {
    preSetHeader();
    preSetSliderAdvertisement();
    preSetSliderCard();
    preSetIndex();
    preSetFilter();
  }

  window.preSetPage = {
    preSetHeader: preSetHeader,
    preSetSliderAdvertisement: preSetSliderAdvertisement,
    preSetSliderCard: preSetSliderCard,
    preSetIndex: preSetIndex,
    preSetFilter: preSetFilter,
    preSetPagesHandler: preSetPagesHandler
  };
})();
