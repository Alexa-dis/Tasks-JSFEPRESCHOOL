const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioImage = document.querySelector('.gallery__img');

portfolioBtn.addEventListener('click', () => {
   portfolioImage.src = "./assets/img/winter/1.jpg"
});
portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);