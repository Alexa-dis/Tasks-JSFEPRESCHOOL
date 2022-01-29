document.querySelector('.theme__button__wrapper').addEventListener('click', () => {
    
    if (localStorage.getItem('theme') === 'light') {
        localStorage.removeItem('theme');
    }
    else {
        (localStorage.setItem('theme', 'light'))
    }
    addLigthTheme()
});

function addLigthTheme() {
  try {
    if (localStorage.getItem('theme') === 'light') {
       document.querySelector('html').classList.add('light'); 
    }
    else {
        document.querySelector('html').classList.remove('light');
    }   
  } catch (err) {}
}

addLigthTheme();