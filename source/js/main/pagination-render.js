(function () {
// --------------- pagination render ---------------
  function paginationRenderHandler() {
    let advertisement;
    if (advertisement = document.querySelector('.advertisement')) {
      const MIN_WIDTH_DESKTOP = 1024;
      const dotTemplate = document.querySelector('#dot').content.querySelector('.pagination__item');
      const pagination = document.querySelector('.pagination__list');
      const slides = document.querySelectorAll('.slider__item');

      function createDots(n) {
        const fragmentDots = document.createDocumentFragment();
        for (let i = 1; i < ((slides.length + 1)/n); i++) {
          const dotElement = dotTemplate.cloneNode(true);
          if (i == 1) {
            dotElement.classList.add('pagination__item--active');
          }
          dotElement.querySelector('.pagination__link').textContent = `${i}`;
          fragmentDots.appendChild(dotElement);
        }
        pagination.appendChild(fragmentDots);
      };

        function renderPagination() {
        while (pagination.firstChild) {
          pagination.removeChild(pagination.firstChild);
        }

        if (document.documentElement.clientWidth < MIN_WIDTH_DESKTOP) {
          createDots(2);
        } else {
          createDots(4);
        }
      };
      renderPagination();
    }
  }

  window.paginationRender = {
    paginationRenderHandler: paginationRenderHandler
  };
})();
