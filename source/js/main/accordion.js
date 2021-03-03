'use strict';
(function () {
  const items = document.querySelectorAll('.questions__item');

  function moveAccordion (trgt) {
    let questions = trgt.dataset.questions;
    document.querySelector('#' + questions).classList.toggle('hide');
    document.querySelector('#btn-' + questions).classList.toggle('rotate-btn');
  };

  function clickPressHandler (elem) {
    moveAccordion(elem.currentTarget);
  };

  function enterPressHandler (evt) {
    if (evt.key === 'Enter') {
      moveAccordion(evt.target);
    }
  };

  items.forEach(function (el) {
    el.addEventListener('click', clickPressHandler);
    el.addEventListener('keydown', enterPressHandler);
  });

})();
