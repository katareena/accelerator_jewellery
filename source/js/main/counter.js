(function () {
  // --------------- counter ---------------
  const buttons = document.querySelectorAll('.added__btn');
  const resultBox = document.querySelector('.added__result');

  function changeNumber(evt) {
    const btnTarget = evt.currentTarget;
    const result = resultBox.textContent;

    if (btnTarget.classList.contains('added__btn--plus')) {
      resultBox.textContent = parseInt(result) + 1;
    }

    if (btnTarget.classList.contains('added__btn--minus')) {
      if (resultBox.textContent < 1) {
        resultBox.textContent = parseInt(0);
      } else {
        resultBox.textContent = parseInt(result) - 1;
      }
    }
  };

  buttons.forEach(function (el) {
    el.addEventListener('click', changeNumber);
  });

})();
