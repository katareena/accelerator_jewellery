(function () {
  // --------------- email validation ---------------
  const COLOR_ERROR = '#b63616';
  const input = document.querySelector('#subscription-field');
  const submitBtn = document.querySelector('.subscription__btn');
  const message = document.querySelector('#subscription-message');

  function validateInputHandler(evt) {
    if (input.value == '') {
      message.style.color = 'transparent';
    } else {
      if (!input.value.includes('@') || !input.value.includes('.')) {
        evt.preventDefault();
        message.style.color = COLOR_ERROR;
      } else {
        message.style.color = 'transparent';
      }
    }
  }

  input.addEventListener('input', validateInputHandler);
  submitBtn.addEventListener('click', (evt) => {
    if (input.value == '') {
      evt.preventDefault();
      message.style.color = COLOR_ERROR;
    }
  });
})();
