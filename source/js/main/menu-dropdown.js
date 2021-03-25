(function () {
// --------------- dropdown site menu(tablet, mobile) ---------------
  const ESCAPE = 27;
  const headerMenu = document.querySelector('.header__menu');
  const burgerBtn = headerMenu.querySelector('.header__menu-btn--burger-js');
  const basketBtn = document.querySelector('.header__menu-btn--basket-js');
  const logo = headerMenu.querySelector('.header__menu-logo');
  const dropdown = document.querySelector('.header__dropdown');
  const items = document.querySelectorAll('.module-js');

  function hideItems() {
    items.forEach(el => {
      el.style.display = 'none';
    });
  };

  function showItems() {
    items.forEach(el => {
      el.style.display = 'block';
    });
  };

  function moveDropdownHandler() {
    dropdown.classList.toggle('header__dropdown--open');
    dropdown.classList.toggle('header__dropdown--absolute');
    burgerBtn.classList.toggle('header__menu-btn--close');
    headerMenu.classList.toggle('header__menu--dark-theme');
    basketBtn.classList.toggle('header__menu-btn--dark-theme');
    logo.classList.toggle('header__menu-logo--dark-theme');

    if (burgerBtn.classList.contains('header__menu-btn--close')) {
      hideItems();
    } else {
      showItems();
    }
  }

  function closeEscDropdownHandler (evt) {
    if (evt.keyCode === ESCAPE) {
      if (dropdown.classList.contains('header__dropdown--open')) {
        moveDropdownHandler();
        showItems();
      }
    }
  };

  burgerBtn.addEventListener('click', moveDropdownHandler);
  document.addEventListener('keydown', closeEscDropdownHandler);

})();
