(function () {
  const PAGES = {
    'start': '/',
    'index': '/index.html',
    'catalog': '/catalog.html',
    'card': '/card.html',
    'authorization': '/authorization.html',
    'added': '/added.html'
  };
  const ESCAPE = 'Escape';

  if (window.location.pathname === PAGES.card) {
    const modal = document.querySelector('.added');
    const addBtn = document.querySelector('#add');
    const closeBtn = modal.querySelector('.added__close');

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
      modal.classList.remove('added--show');
      getScroll();
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
      // if (window.location.pathname === PAGES.card) {}
      evt.preventDefault();
      preventScroll();
      modal.classList.add('added--show');
      closeBtn.addEventListener('click', closeModalHandler);
      modal.addEventListener('click', closeOverlayHandler);
      window.addEventListener('keydown', closeEscHandler);
    }

    addBtn.addEventListener('click', openModalHandler);
  }
})();
