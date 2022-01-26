const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioBtns = document.querySelector('.portfolio__button__wrapper');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioBtnActive = document.querySelectorAll('.button_colored');


function changeImage(event) {
   if(event.target.classList.contains('portfolio-btn')) {
      if (event.target.dataset.season === 'winter') {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/gallery/winter/${index + 1}.jpg`);
      } 
      else if (event.target.dataset.season === 'spring') {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/gallery/spring/${index + 1}.jpg`);
      } 
      else if (event.target.dataset.season === 'summer') {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/gallery/summer/${index + 1}.jpg`);
      } 
      else if (event.target.dataset.season === 'autumn') {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/gallery/autumn/${index + 1}.jpg`);
      }
    };
};
portfolioBtns.addEventListener('click',changeImage);





