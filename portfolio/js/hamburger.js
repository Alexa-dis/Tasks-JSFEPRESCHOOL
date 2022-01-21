const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.header__navigation');
const shadow = document.querySelector('.shadow');


function toggleMenu() {
  hamburger.classList.toggle('open');
  navigation.classList.toggle('open');
  shadow.classList.toggle('open');
  
}
hamburger.addEventListener('click', toggleMenu);
navigation.addEventListener('click', toggleMenu);
shadow.addEventListener('click', toggleMenu);




  