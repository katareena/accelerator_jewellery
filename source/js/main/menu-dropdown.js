'use strict';
(function () {
  const ESCAPE = 27;
  const MAX_TABLET_WIDTH = 1023;
  const MIN_DESCTOP_WIDTH = 1024;
  const headerMenu = document.querySelector('.header__menu');
  const burgerBtn = headerMenu.querySelector('.header__menu-btn--burger-js');
  const basketBtn = document.querySelector('.header__menu-btn--basket-js');
  const logo = headerMenu.querySelector('.header__menu-logo');
  const dropdown = document.querySelector('.header__dropdown');

  function preSetDropdown () {
    if (document.documentElement.clientWidth <= MAX_TABLET_WIDTH) {
      dropdown.classList.remove('header__dropdown--open');
    }
  }

  function openDropdownHandler () {
    dropdown.classList.toggle('header__dropdown--open');
    dropdown.classList.toggle('header__dropdown--absolute');
    burgerBtn.classList.toggle('header__menu-btn--close');
    headerMenu.classList.toggle('header__menu--dark-theme');
    basketBtn.classList.toggle('header__menu-btn--dark-theme');
    logo.classList.toggle('header__menu-logo--dark-theme');
  }

  burgerBtn.addEventListener('click', openDropdownHandler)
  document.addEventListener('DOMContentLoaded', preSetDropdown);
  window.addEventListener('resize', preSetDropdown);

})();
