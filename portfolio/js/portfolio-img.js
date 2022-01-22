const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioBtns = document.querySelector('.portfolio__button__wrapper');
const portfolioImages = document.querySelectorAll('.portfolio-image');


function changeImage(event) {
   if(event.target.classList.contains('portfolio-btn')) {
     // здесь код функции, меняющей src изображений
     
   }
 }
portfolioBtn.addEventListener('click', () => {
   portfolioImages.src = "./assets/img/gallery/autumn/1.jpg"
});
portfolioImages.forEach((img, index) => img.src = `./assets/img/gallery/autumn/${index + 1}.jpg`);