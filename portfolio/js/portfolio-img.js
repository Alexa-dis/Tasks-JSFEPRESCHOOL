const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioBtns = document.querySelector('.portfolio__button__wrapper');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioBtnsAll = document.querySelectorAll('.portfolio-btn');
const portfolioBtnActive = document.querySelector('.button_colored');

//измение картинок
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
      removeColoredBtn();
      selectClicketBtn(event);
    };
    
};
portfolioBtns.addEventListener('click',changeImage);


//удаление активного тега 
const removeColoredBtn = () => {
  portfolioBtnsAll.forEach(portfolioBtn => {
    portfolioBtn.classList.remove('button_colored');
    portfolioBtn.classList.add('button_bordered');
  })
 };

const selectClicketBtn = (event) => {
  event.target.classList.add('button_colored');
  event.target.classList.remove('button_bordered');
};