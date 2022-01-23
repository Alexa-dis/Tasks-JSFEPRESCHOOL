const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.header__navigation');
const shadow = document.querySelector('.shadow');
const body = document.querySelector('body');


function toggleMenu() {
  hamburger.classList.toggle('open');
  navigation.classList.toggle('open');
  shadow.classList.toggle('open');
  body.classList.toggle('lock');
}

hamburger.addEventListener('click', toggleMenu);
navigation.addEventListener('click', toggleMenu);
shadow.addEventListener('click', toggleMenu);
body.addEventListener(toggleMenu);







  