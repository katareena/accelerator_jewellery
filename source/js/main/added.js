(function () {
// --------------- modal Added ---------------
  function modalAddedHandler() {
    let card;

    if (card = document.querySelector('.card')) {
      const ESCAPE = 'Escape';
      const modal = document.querySelector('.added');
      const addBtn = document.querySelector('#add');
      const closeBtn = modal.querySelector('.added__close');

      // --------------- form open/close ---------------
      function closeModalHandler() {
        modal.classList.remove('added--show');
        window.scroll.getScroll();
        closeBtn.removeEventListener('click', closeModalHandler);
        modal.removeEventListener('click', window.login.closeOverlayHandler);
        window.removeEventListener('keydown', window.login.closeEscHandler);
      }

      function closeOverlayHandler(evt) {
        if (!evt.target.matches('.added__wrap, .added__wrap *')) {
          if (modal.classList.contains('added--show')) {
            closeModalHandler();
          }
        }
      };

      function closeEscHandler(evt) {
        if (evt.key === ESCAPE) {
          if (modal.classList.contains('added--show')) {
            closeModalHandler();
          }
        }
      };

      function openModalHandler(evt) {
        evt.preventDefault();
        window.scroll.preventScroll();
        modal.classList.add('added--show');
        closeBtn.addEventListener('click', closeModalHandler);
        modal.addEventListener('click', closeOverlayHandler);
        window.addEventListener('keydown', closeEscHandler);
      }

      addBtn.addEventListener('click', openModalHandler);
    }
  }

  window.added = {
    modalAddedHandler: modalAddedHandler
  };
})();
