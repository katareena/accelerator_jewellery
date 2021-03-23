(function () {
  // --------------- accordion ---------------
  function moveAccordion (trgt) {
    const set = trgt.dataset.set;
    document.querySelector('#' + set).classList.toggle('hide');
    document.querySelector('#btn-' + set).classList.toggle('rotate-btn');
  };

  function clickPressHandler (elem) {
    moveAccordion(elem.currentTarget);
  };

  function enterPressHandler (evt) {
    if (evt.key === 'Enter') {
      moveAccordion(evt.target);
    }
  };

  function setEventListeners () {
    let qustions;
    let filter;
    if (qustions = document.querySelector('.questions')) {
      const items = document.querySelectorAll('.accordion-item');
      items.forEach(el => {
        el.addEventListener('click', clickPressHandler);
        el.addEventListener('keydown', enterPressHandler);
      });
    }

    if (filter = document.querySelector('.catalog__filter')) {
      const blocks = document.querySelectorAll('.filter__item');
      blocks.forEach(el => {
        const item = el.querySelector('h4');
        item.addEventListener('click', clickPressHandler);
        item.addEventListener('keydown', enterPressHandler);
      });
    }
  }

  setEventListeners();

})();
