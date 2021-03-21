(function () {
  // --------------- accordion ---------------
  const items = document.querySelectorAll('.accordion-item');

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

  items.forEach(el => {
    el.addEventListener('click', clickPressHandler);
    el.addEventListener('keydown', enterPressHandler);
  });

})();
