import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  if (map) {
    mapImage.classList.add('contacts__image--hide');
    createMap();
  }
  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

const menuContainer = document.querySelector('.burger');
const menu = menuContainer.querySelector('.burger__list');
const links = document.querySelectorAll('.nav__link');
const toggle = menuContainer.querySelector('.burger__toggle');
const closingMenu = menuContainer.querySelector('.burger__close');
const promo = document.querySelector('.promo');
const map = document.querySelector('#map-canvas');
const mapImage = map.querySelector('.contacts__image');
const ymaps = window.ymaps;
const MAP_CENTER = [59.938667, 30.323073];
const ZOOM = 19;
const PIN_SIZE = [18, 22];
const PIN_OFSET = [-18, -22];

// Бургер-меню

menu.classList.remove('burger__list--nojs');
toggle.classList.remove('burger__toggle--nojs');
document.querySelector('.header__background').classList.remove('header__background--nojs');

if (menuContainer) {
  const toggleMenu = () => {
    menuContainer.classList.toggle('burger--open');
    document.body.classList.toggle('scroll-lock');
    promo.classList.toggle('promo--hidden');
  };

  const removeMenu = () => {
    menuContainer.classList.remove('burger--open');
    document.body.classList.remove('scroll-lock');
    promo.classList.remove('promo--hidden');
  };

  toggle.addEventListener('click', toggleMenu);
  closingMenu.addEventListener('click', removeMenu);
  links.forEach((el) => el.addEventListener('click', removeMenu));
}

// Яндекс.Карта

const createMap = () => {
  ymaps.ready(init);
  function init() {
    const newMap = new ymaps.Map(map, {
      center: MAP_CENTER,
      zoom: ZOOM,
    });

    const myPlacemark = new ymaps.Placemark(MAP_CENTER, {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/svg/pin.svg',
      iconImageSize: PIN_SIZE,
      iconImageOffset: PIN_OFSET,
    });

    newMap.geoObjects.add(myPlacemark);
  }
};


// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
