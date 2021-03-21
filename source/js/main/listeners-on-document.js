(function () {
// --------------- all listeners on document ---------------
  document.addEventListener('DOMContentLoaded', () => {
    window.preSetPage.preSetPagesHandler();
    window.added.modalAddedHandler();
    window.filterMove.moveFilter();
    window.paginationRender.paginationRenderHandler();
    window.sliderCard.moveSliderCardHandler();
    window.sliderCatalog.moveSliderCatalogHandler();
    window.slider.moveSliderAdvertisementHandler();
  });

  document.addEventListener('resize', () => {
    window.preSetPage.preSetPagesHandler();
    window.paginationRender.paginationRenderHandler();
  });

})();
