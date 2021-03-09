'use strict';
(function () {
  const ESCAPE = 'Escape';
  const modal = document.querySelector('.authorization');
  const openBtn = document.querySelector('#login');
  const closeBtn = modal.querySelector('.authorization__close');
  const form = modal.querySelector('.authorization__form');
  const mailInput = modal.querySelector('#user-mail');
  const passwordInput = modal.querySelector('#user-password');

  // --------------- form open/close ---------------
  function preventScroll() {
    const body = document.body;
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
  };

  function getScroll() {
    const body = document.body;
    body.style.position = '';
    body.style.top = '';
    body.style.height = '';
    body.style.overflowY = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  };

  function closeModalHandler() {
    modal.classList.remove('authorization--show');
    getScroll();
    closeBtn.removeEventListener('click', closeModalHandler);
    modal.removeEventListener('click', window.login.closeOverlayHandler);
    window.removeEventListener('keydown', window.login.closeEscHandler);
    mailInput.removeEventListener('input', function() {
      window.login.validateAllInputsHandler(mailInput, 'message-mail', !mailInput.value.includes('@') || !mailInput.value.includes('.'));
    });
    passwordInput.removeEventListener('input', function() {
      window.login.validateAllInputsHandler(passwordInput, 'message-password', passwordInput.value.length < 6);
    });
    form.removeEventListener('submit', window.login.submitFormHandler);
  }

  function closeOverlayHandler(evt) {
    if (!evt.target.matches('.authorization__wrap, .authorization__wrap *')) {
      if (modal.classList.contains('authorization--show')) {
        closeModalHandler();
      }
    }
  };

  function closeEscHandler(evt) {
    if (evt.key === ESCAPE) {
      if (modal.classList.contains('authorization--show')) {
        closeModalHandler();
      }
    }
  };

  function openModalHandler(evt) {
    evt.preventDefault();
    form.reset();
    preventScroll();
    modal.classList.add('authorization--show');
    mailInput.focus();
    closeBtn.addEventListener('click', closeModalHandler);
    modal.addEventListener('click', closeOverlayHandler);
    window.addEventListener('keydown', closeEscHandler);
    mailInput.addEventListener('input', function() {
      window.login.validateAllInputsHandler(mailInput, 'message-mail', !mailInput.value.includes('@') || !mailInput.value.includes('.'));
    });
    passwordInput.addEventListener('input', function() {
      window.login.validateAllInputsHandler(passwordInput, 'message-password', passwordInput.value.length < 6);
    });
    form.addEventListener('submit', window.login.submitFormHandler);
  }

  openBtn.addEventListener('click', openModalHandler);

  // --------------- form validation ---------------

  let isStorageSupport = true;
  let storage = '';

  try {
    storage = localStorage.getItem('userMail');
  } catch (err) {
    isStorageSupport = false;
    console.log(err);
  };

  function error_message(id, hide) {
    if (hide) {
      document.getElementById(id).classList.add('hide');
    } else {
      document.getElementById(id).classList.remove('hide');
    }
  };

  function validateAllInputsHandler(input, idMessage, requirement) {
    input.classList.remove('authorization__form-input--invalid');
    error_message(idMessage, true);
    if (input.value !== '') {
      if (requirement) {
        input.classList.add('authorization__form-input--invalid');
        error_message(idMessage, false);
      } else {
        return true;
      }
    }
    return false;
  }

  function submitFormHandler(evt) {
    if (!validateAllInputsHandler(mailInput, 'message-mail', !mailInput.value.includes('@') || !mailInput.value.includes('.')) ||
        !validateAllInputsHandler(passwordInput, 'message-password', passwordInput.value.length < 6)) {
      evt.preventDefault();
      if (!mailInput.value) {
        mailInput.classList.add('authorization__form-input--invalid');
        error_message('message-mail', false);
      }
      if (!passwordInput.value) {
        passwordInput.classList.add('authorization__form-input--invalid');
        error_message('message-password', false);
      }
    } else {
      if (isStorageSupport) {
        localStorage.setItem('userMail', mailInput.value);
        mailInput.classList.remove('authorization__form-input--invalid');
        passwordInput.classList.remove('authorization__form-input--invalid');
        error_message('message-mail', true);
        error_message('message-password', true);
      }
    }
  };

  window.login = {
  closeModalHandler: closeModalHandler,
  closeOverlayHandler: closeOverlayHandler,
  closeEscHandler: closeEscHandler,
  validateAllInputsHandler: validateAllInputsHandler,
  submitFormHandler: submitFormHandler
  };
})();
