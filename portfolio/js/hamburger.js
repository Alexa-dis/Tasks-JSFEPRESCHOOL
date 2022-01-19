const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.header__navigation');

function toggleMenu() {
  hamburger.classList.toggle('open');
  navigation.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);
navigation.addEventListener('click', toggleMenu);



  