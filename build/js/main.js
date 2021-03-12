'use strict';
(function () {
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

'use strict';
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
})();

'use strict';
(function () {
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

'use strict';
(function () {
  const COLOR_ERROR = '#b63616';
  const input = document.querySelector('#subscription-field');
  const submitBtn = document.querySelector('.subscription__btn');
  const message = document.querySelector('#subscription-message');

  function validateInputHandler () {
    if (input.value == '') {
      message.style.color = 'transparent';
      submitBtn.disabled = 'true';
    } else {
      if (!input.value.includes('@') || !input.value.includes('.')) {
        message.style.color = COLOR_ERROR;
        submitBtn.disabled = 'true';
      } else {
        message.style.color = 'transparent';
        submitBtn.disabled = '';
      }
    }
  }

  input.addEventListener('input', validateInputHandler);
})();

'use strict';
(function () {
  const PAGES = {
    'index': '/index.html',
    'catalog': '/catalog.html',
    'card': '/card.html',
    'authorization': '/authorization.html',
    'added': '/added.html'
  };

  if (window.location.pathname === PAGES.catalog) {
    const openBtn = document.querySelector('.catalog__filter-open');
    const closeBtn = document.querySelector('.filter__form-close');
    const filter = document.querySelector('.catalog__filter');

    function openFilterHandler() {
      filter.classList.add('catalog__filter--open');
    }

    function closeFilterHandler() {
      filter.classList.remove('catalog__filter--open');
    }

    openBtn.addEventListener('click', openFilterHandler);
    closeBtn.addEventListener('click', closeFilterHandler);
  }
})();

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
  function closeModalHandler() {
    modal.classList.remove('authorization--show');
    window.scroll.getScroll();
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
    window.scroll.preventScroll();
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

'use strict';
(function () {
  const ESCAPE = 27;
  const headerMenu = document.querySelector('.header__menu');
  const burgerBtn = headerMenu.querySelector('.header__menu-btn--burger-js');
  const basketBtn = document.querySelector('.header__menu-btn--basket-js');
  const logo = headerMenu.querySelector('.header__menu-logo');
  const dropdown = document.querySelector('.header__dropdown');

  function openDropdownHandler () {
    dropdown.classList.toggle('header__dropdown--open');
    dropdown.classList.toggle('header__dropdown--absolute');
    burgerBtn.classList.toggle('header__menu-btn--close');
    headerMenu.classList.toggle('header__menu--dark-theme');
    basketBtn.classList.toggle('header__menu-btn--dark-theme');
    logo.classList.toggle('header__menu-logo--dark-theme');
  }

  function closeEscDropdownHandler (evt) {
    if (evt.keyCode === ESCAPE) {
      if (dropdown.classList.contains('header__dropdown--open')) {
        openDropdownHandler();
      }
    }
  };

  burgerBtn.addEventListener('click', openDropdownHandler);
  document.addEventListener('keydown', closeEscDropdownHandler);

})();

'use strict';
(function () {
  const PAGES = {
    'start': '/',
    'index': '/index.html',
    'card': '/card.html',
  };

  if (window.location.pathname === PAGES.start || window.location.pathname === PAGES.index || window.location.pathname === PAGES.card) {
    const MIN_WIDTH_DESKTOP = 1024;
    const MIN_WIDTH_TABLET = 768;
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

      function renderPaginationHandler() {
      while (pagination.firstChild) {
        pagination.removeChild(pagination.firstChild);
      }

      // if (document.documentElement.clientWidth >= MIN_WIDTH_TABLET) {
        if (document.documentElement.clientWidth < MIN_WIDTH_DESKTOP) {
          createDots(2);
        } else {
          createDots(4);
        }
      // } else {
      //   return;
      // }
    };

    document.addEventListener('DOMContentLoaded', renderPaginationHandler);
    window.addEventListener('resize', renderPaginationHandler);
  }
})();

'use strict';
(function () {
  const PAGES = {
    'start': '/',
    'index': '/index.html',
    'catalog': '/catalog.html',
    'card': '/card.html',
    'authorization': '/authorization.html',
    'added': '/added.html'
  };
  const MIN_WIDTH_DESKTOP = 1024;
  const dropdown = document.querySelector('.header__dropdown');
  const answers = document.querySelectorAll('.questions__elem-js');
  const filter = document.querySelector('.catalog__filter');
  const slider = document.querySelector('.slider');
  const sliderInner = document.querySelector('.slider__inner');

  // доп способ проверки названия текущей страницы
  // window.location.toString().indexOf('catalog.htm') > 0

  function preSetPage () {
    if (document.documentElement.clientWidth < MIN_WIDTH_DESKTOP) {
      dropdown.classList.remove('header__dropdown--open');
    }

    if (window.location.pathname === PAGES.index || window.location.pathname === PAGES.start) {
      answers.forEach(elem => {
        elem.classList.add('hide');
      });
    }

    if (window.location.pathname === PAGES.index || window.location.pathname === PAGES.start || window.location.pathname === PAGES.card) {
      slider.classList.add('slider--overflow-hidden');
      sliderInner.classList.add('slider__inner--nowrap');
    }

    if (window.location.pathname === PAGES.catalog) {
      if (document.documentElement.clientWidth < MIN_WIDTH_DESKTOP) {
        filter.classList.remove('catalog__filter--open');
      }
    }
  }

  window.preSetPage = {
    preSetPage: preSetPage
  };

  document.addEventListener('DOMContentLoaded', preSetPage);
  window.addEventListener('resize', preSetPage);
})();

'use strict';
(function () {
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

  window.scroll = {
    preventScroll: preventScroll,
    getScroll: getScroll
  };
})();

'use strict';
(function () {
  // ----------- slider CATALOG ------------
  const PAGES = {
    'start': '/',
    'index': '/index.html',
    'catalog': '/catalog.html',
    'card': '/card.html',
    'authorization': '/authorization.html',
    'added': '/added.html'
  };

  if (window.location.pathname === PAGES.catalog) {
    const nextBtn = document.querySelector('.slider-btn-next');
    const prevBtn = document.querySelector('.slider-btn-prev');
    let slideIndex = 1;

    function showSlide(n) {
      let i;
      const slides = document.getElementsByClassName('catalog__list-box');
      const dots = document.getElementsByClassName('pagination__item');

      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('catalog__list-box--active');
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('pagination__item--active');
      }
      slides[slideIndex - 1].classList.add('catalog__list-box--active');
      dots[slideIndex - 1].classList.add('pagination__item--active');
    }

    showSlide(slideIndex);

    function plusSlide(evt) {
      evt.preventDefault();
      showSlide(slideIndex += 1);
    }

    function minusSlide(evt) {
      evt.preventDefault();
      showSlide(slideIndex -= 1);
    }

    prevBtn.addEventListener('click', minusSlide);
    nextBtn.addEventListener('click', plusSlide);

    // ----------- touch slider CATALOG ------------
    const MIN_WIDTH_TABLET = 768;
    let xDown = null;

    function getTouches(evt) {
      return evt.touches || evt.originalEvent.touches;
    };

    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
    };

    function handleTouchMove(evt) {
      if(window.innerWidth < MIN_WIDTH_TABLET) {
        if (!xDown) {
          return;
        }

        const xUp = evt.touches[0].clientX;
        const xDiff = xDown - xUp;

        if (xDiff> 0) {
          /* left swipe */
          console.log('left');
          plusSlide(evt);
        } else {
          /* right swipe */
          console.log('right');
          minusSlide(evt);
        }
        /* reset values */
        xDown = null;
      }
    };

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
  }

})();

'use strict';
(function () {
  // ----------- slider ------------
  const PAGES = {
    'start': '/',
    'index': '/index.html',
    'catalog': '/catalog.html',
    'card': '/card.html',
    'authorization': '/authorization.html',
    'added': '/added.html'
  };

  if (window.location.pathname === PAGES.start || window.location.pathname === PAGES.index || window.location.pathname === PAGES.card) {
    const MIN_WIDTH_DESKTOP = 1024;
    const MIN_WIDTH_TABLET = 768;
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider__item');
    const innerSlider = document.querySelector('.slider__inner');
    const sliderWidth = document.querySelector('.slider').offsetWidth;
    const nextBtn = document.querySelector('.advertisement__btn--next');
    const prevBtn = document.querySelector('.advertisement__btn--previous');
    const dots = document.querySelector('.pagination__list').childNodes;

    const widthArray = [];
    let innerSliderWidth = 0;
    let offset = 0; //сдвиг слева
    let step = 0; //шаги сдвига
    let remains = 0; //сдвиг справа
    // sliderWidth - ширина телевизора
    // innerSliderWidth - ширина всей линии слайдов

    function setWidthinnerSlider() {
      for (let i = 0; i < slides.length; i++) {
        widthArray.push(slides[i].offsetWidth);
        innerSliderWidth += slides[i].offsetWidth;
      }
    };
    setWidthinnerSlider();

    function movePrev(n) {
      remains = innerSliderWidth - sliderWidth - (offset + widthArray[step]*n);
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('pagination__item--active');
      }

      if (offset > 0) {
        offset = offset - widthArray[step]*n;
        innerSlider.style.left = -offset + 'px';
        dots[(dots.length - 1) - (step + 1)].classList.add('pagination__item--active');

      } else {
        innerSlider.style.left = -(innerSliderWidth - sliderWidth) + 'px';
        offset = (innerSliderWidth - sliderWidth);
        remains = 0;
        step = -1;
        dots[dots.length - 1].classList.add('pagination__item--active');
      }

      if (step + 1 == slides.length) {
        offset = 0;
        step = 0;
      } else {
        step++;
      }
    }

    function moveNext(n) {
      remains = innerSliderWidth - sliderWidth - (offset + widthArray[step]*n);
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('pagination__item--active');
      }

      if (remains >= 0) {
        offset = offset + widthArray[step]*n;
        innerSlider.style.left = -offset + 'px';
        dots[step + 1].classList.add('pagination__item--active');

      } else {
        innerSlider.style.left = 0 + 'px';
        offset = 0;
        step = -1;
        dots[step + 1].classList.add('pagination__item--active');
      }

      if (step + 1 == slides.length) {
        offset = 0;
        step = 0;
      } else {
        step++;
      }
    }

    prevBtn.addEventListener('click', function () {
      if (document.documentElement.clientWidth < MIN_WIDTH_DESKTOP) {
        movePrev(2);
      } else {
        movePrev(4);
      }
    });

    nextBtn.addEventListener('click', function () {
      if (document.documentElement.clientWidth < MIN_WIDTH_DESKTOP) {
        moveNext(2);
      } else {
        moveNext(4);
      }
    });

  // ----------- touch slider ------------
    // const MIN_WIDTH_TABLET = 768;
    let xDown = null;

    function getTouches(evt) {
      return evt.touches || evt.originalEvent.touches;
    };

    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
    };

    function handleTouchMove(evt) {
      if(window.innerWidth < MIN_WIDTH_TABLET) {
        if (!xDown) {
          return;
        }

        const xUp = evt.touches[0].clientX;
        const xDiff = xDown - xUp;

        if (xDiff> 0) {
          /* left swipe */
          console.log('left');
          moveNext(2);
        } else {
          /* right swipe */
          console.log('right');
          movePrev(2);
        }
        /* reset values */
        xDown = null;
      }
    };

    slider.addEventListener('touchstart', handleTouchStart, false);
    slider.addEventListener('touchmove', handleTouchMove, false);
  }
})();
