const playBtn = document.querySelector('.btn_src');
const btn = document.querySelector('.btn');
const activeImg = document.querySelector('.main__wrapper');

const birds = document.querySelectorAll('.header__item');
const solovey = document.querySelector('.solovey');
const drozd = document.querySelector('.drozd');
const zarynka = document.querySelector('.zarynka');
const javoronok = document.querySelector('.javoronok');
const slavka = document.querySelector('.slavka');

const audio = document.querySelector('.audio');


function playAudio() {
    audio.currentTime = 0;
    audio.play();
    playBtn.src = './assets/svg/pause.svg'
    activeImg.classList.add('play')
}

function pauseAudio() {
    audio.pause();
    playBtn.src = './assets/svg/play.svg'
    activeImg.classList.remove('play')
}

playBtn.addEventListener('click', () => {
    const isPlay = activeImg.classList.contains('play')
    if (isPlay) {
        pauseAudio()
    } else {
        playAudio()
    }
})

//solovey audio
function soloveyAudio() {
    //activeImg.classList.add('play')
    audio.src = './assets/audio/solovey.mp3'
    document.getElementById("change").style.backgroundImage = 'url(/assets/img/solovey.jpg)'
}
solovey.addEventListener('click', (event) => {
    soloveyAudio();
    playAudio();
    removeSelectedBird();
    selectBird(event);
})


//drozd audio 
function drozdAudio() {
    audio.src = './assets/audio/drozd.mp3'
    document.getElementById("change").style.backgroundImage = 'url(/assets/img/drozd.jpg)'
}
drozd.addEventListener('click', (event) => {
    drozdAudio();
    playAudio();
    removeSelectedBird();
    selectBird(event);
})


//zarynka audio
function zarynkaAudio() {
    audio.src = './assets/audio/zarynka.mp3'
    document.getElementById("change").style.backgroundImage = 'url(/assets/img/zarynka.jpg)'
}
zarynka.addEventListener('click', (event) => {
    zarynkaAudio();
    playAudio();
    removeSelectedBird();
    selectBird(event);
})


//javoronok audio
function javoronokAudio() {
    audio.src = './assets/audio/javoronok.mp3'
    document.getElementById("change").style.backgroundImage = 'url(/assets/img/javoronok.jpg)'
}
javoronok.addEventListener('click', (event) => {
    javoronokAudio();
    playAudio();
    removeSelectedBird();
    selectBird(event);
})

//slavka audio
function slavkaAudio() {
    audio.src = './assets/audio/slavka.mp3'
    document.getElementById("change").style.backgroundImage = 'url(/assets/img/slavka.jpg)'
}
slavka.addEventListener('click', (event) => {
    slavkaAudio();
    playAudio();
    removeSelectedBird();
    selectBird(event);
})


//Btns class change
function removeSelectedBird() {
    birds.forEach(header__item => {
        header__item.classList.remove('active');
    })
}

function selectBird(event) {
    event.target.classList.add('active');
}
