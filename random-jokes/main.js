const button = document.querySelector('.joke__btn');
const text = document.querySelector('.text');
const author = document.querySelector('.author');

const url = 'https://type.fit/api/quotes';


async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  let n = Math.floor(Math.random() * data.length);
  text.innerHTML =  data[n].text;
  author.innerHTML =  data[n].author;
}
 
button.addEventListener('click', getData())
button.addEventListener('click', () => window.location.reload());


