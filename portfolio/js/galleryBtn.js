const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioBtns = document.querySelector('.portfolio__button__wrapper');

//function changeClassActive() {
 //   portfolioBtns.classList.add ('button_colored');
//  portfolioBtn.classList.toggle ('button_colored');
//}
//portfolioBtns.addEventListener('click', changeClassActive);
//portfolioBtns.classList.add ('button_colored');
portfolioBtn.addEventListener('click', () => {
    portfolioBtn.classList.toggle('button_colored');
});
