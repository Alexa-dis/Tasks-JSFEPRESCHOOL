console.log( 'Score: 50 \n\n Вёрстка +10 \n При загрузке страницы приложения отображается рандомная цитата +10 \n При перезагрузке страницы цитата обновляется (заменяется на другую) +10 \n Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10 \n Смена цитаты сопровождается любым другим эффектом, меняется фоновый цвет страницы +10' )

const button = document.querySelector('.joke__btn');
const text = document.querySelector('.text');
const author = document.querySelector('.author');
const colors = ['#f57c65', '#bfda63', '#f7dab8', '#bb9bad', '#fecf72', '#7ecdd9', '#ffffff' ]
const url = 'https://type.fit/api/quotes';
const body = document.querySelector('body');

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  let n = Math.floor(Math.random() * data.length);
  text.innerHTML =  data[n].text;
  author.innerHTML =  data[n].author;
}
 

function changeColor() {
  let n = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[n];
  button.style.backgroundColor = colors[n];
}

button.addEventListener('click', getData())
button.addEventListener('click', () => window.location.reload());
button.addEventListener('click', changeColor())