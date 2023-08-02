// getting elements
const cardList = document.getElementById('card');
const seach = document.getElementById('search');

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDdjODhmYTBhYWNhMmE5Y2IwMmExMjY0MmFiYmI3YyIsInN1YiI6IjY0ODlmNzAyZDJiMjA5MDBhZDNlZWNkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sayDQQ9JRZ8G07pDh8EeA_VGP-3SPOqJw7gxQJ489sc'
  }
};

let howMuch = 6;
let section = `discover`;
for(let t=1; t<howMuch; t++){
  const url = `https://api.themoviedb.org/3/${section}/movie?include_adult=false&page=${t}`;
  fetch(url, options)
    .then(response => response.json())
    .then((response) => {
      console.log(response)
      for(let i=0; i<response.results.length;i++){
        let newCard = document.createElement('div');
        newCard.classList.add('cards')
        newCard.innerHTML=` <button onclick="infoTab(${response.results[i]})" class="card responsive-cards">
        <img draggable="false" src="http://image.tmdb.org/t/p/w500${response.results[i].poster_path}" class="card-img-top" alt="...">
        <div class="card-body">
          <h6>${response.results[i].title}</h6>
          </div>
          </button>`;
          newCard.classList.add('card');
          cardList.append(newCard);

        }
      }
    )
   
}
function inputClick() {
  type = false;
  search.style.color = 'white';
  setTimeout(() => {
    seach.value=""
  }, 10);
}

var type;
let count = 0;
const speed = 100;
var txt = [
  'Avengers',
  'Barbie',
  'Fast x',
  'Black Adam',
  'Spiderman',
  'Puss in the boots'
];
var txtNum = 0;
let p = txt[txtNum].length+1;

function typeWriter() {
  if (txt[txtNum].length > count) {
    seach.value += txt[txtNum].charAt(count);
    count++;
    if(type == undefined){
      setTimeout(typeWriter, speed); // Delay each iteration with "speed" milliseconds
    }
  } else {
    if (p !== 0) {
      p--;
      let reverse = txt[txtNum].slice(seach.value, p);
      seach.value = reverse;
      if(type == undefined){
        setTimeout(typeWriter, speed); // Delay each iteration with "speed" milliseconds
      }
    } else {
      if(seach.value.trim().length !== 0){
        seach.value = '';
      }
      if (txtNum == 5) {
        count = 0;
        txtNum = 0;
        if(type == undefined){
          setTimeout(typeWriter, speed); // Delay for the next sentence after clearing the input
        }
      } else if (txtNum < 6) {
        count = 0;
        txtNum++;
        p=txt[txtNum].length;
        if(type == undefined){
          setTimeout(typeWriter, speed); // Delay for the next sentence after clearing the input
        }
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', typeWriter);
  // typeWriter()