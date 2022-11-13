import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

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
const toggle = menuContainer.querySelector('.burger__toggle');
const closingMenu = menuContainer.querySelector('.burger__close');

menu.classList.remove('burger__list--nojs');
toggle.classList.remove('burger__toggle--nojs');

if (menuContainer) {
  const toggleMenu = () => {
    menuContainer.classList.toggle('burger--open');
  };

  const removeMenu = () => {
    menuContainer.classList.remove('burger--open');
  };

  toggle.addEventListener('click', toggleMenu);
  closingMenu.addEventListener('click', removeMenu);
}


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
