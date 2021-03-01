'use strict';
(function () {
  const COLOR_ERROR = '#b63616';
  const input = document.querySelector('#subscription-field');
  const submitBtn = document.querySelector('.subscription__btn');
  const message = document.querySelector('#subscription-message');

  function validateInputHandler () {
    if (input.value == '') {
      message.style.color = 'transparent';
      submitBtn.disabled = 'true'
    } else {
      if (!input.value.includes('@') || !input.value.includes('.')) {
        message.style.color = COLOR_ERROR;
        submitBtn.disabled = 'true'
      } else {
        message.style.color = 'transparent';
        submitBtn.disabled = ''
      }
    }
  }

  input.addEventListener('input', validateInputHandler);
})();
