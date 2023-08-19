// getting elements
const cardList = document.getElementById('card');
const searchResults = document.getElementById('seachResults');
const searchSubHeading = document.getElementById('seachSubHeading');
const searchRow = document.getElementById('searchRow');
const overlay = document.getElementById('overlay');


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDdjODhmYTBhYWNhMmE5Y2IwMmExMjY0MmFiYmI3YyIsInN1YiI6IjY0ODlmNzAyZDJiMjA5MDBhZDNlZWNkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sayDQQ9JRZ8G07pDh8EeA_VGP-3SPOqJw7gxQJ489sc'
  }
};
var section;
var url;
document.addEventListener('DOMContentLoaded', ()=>{
  section="discover";
  load()
});
const pageNum = 8;
function load() {
  for(let t=1; t<pageNum; t++){
    if(sessionStorage.getItem('section') == "discover"){
      navStatus(link1)
      subHeading.innerHTML = `Personalized Cinema`
      url= `https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=${t}`
    }
    if(sessionStorage.getItem('section')  =="trending"){
      navStatus(link2);
      subHeading.innerHTML = `Hot Picks`
      url = `https://api.themoviedb.org/3/trending/movie/day?include_adult=false&page=${t}`;
    }
    if(sessionStorage.getItem('section')  == "popular"){
      navStatus(link3);
      subHeading.innerHTML = `All-Time Favorites`
      url = `https://api.themoviedb.org/3/movie/popular?include_adult=false&language=en-US&page=${t}`
    }
    if(sessionStorage.getItem('section') =="top-rated"){
      navStatus(link4);
      subHeading.innerHTML = `Viewer's choice`
      url = `https://api.themoviedb.org/3/movie/top_rated?include_adult=false&language=en-US&page=${t}`
    }
    fetch(url, options)
      .then(response => response.json())
      .then((response) => {
        const returned = JSON.parse(JSON.stringify(response))
        for(let i=0; i<response.results.length;i++){
          if( response.results[i].title == 'Lusty Discipline in Uniform'|| response.results[i].title == 'PAW Patrol: The movie'){
            return;
          }else{
          let newCard = document.createElement('div');
          newCard.classList.add('cards')
          newCard.innerHTML=`<button class="card responsive-cards" onclick="infoTab(${response.results[i].id})">
          <img draggable="false" src="http://image.tmdb.org/t/p/w500${response.results[i].poster_path}" class="card-img-top skele-img" alt="${response.results.title}">
          <div class="card-body">
            <h6>${response.results[i].title}</h6>

            </div>
            </button>`;          
            newCard.classList.add('card');
            cardList.append(newCard);
        }
          }
        }
      )
  }
} 



function search(){
searchResults.innerHTML=''
searchSubHeading.innerHTML = `Search Results`
searchRow.classList.remove('none')
const inputValue = searched.value;
const query = inputValue.replace(/ /g, '%20');

var searhPageNum = 1;
  fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${searhPageNum}`, options)
  .then(queryResults => queryResults.json())
  .then((queryResults) => {
    for(let i=0; i<queryResults.results.length; i++){
      if(queryResults.results[i].poster_path !== null){
        let newCard = document.createElement('div');
        newCard.classList.add('cards')
        newCard.innerHTML=`
        <button onclick="infoTab(${queryResults.results[i].id})" class="card responsive-cards">
        <img draggable="false" src="http://image.tmdb.org/t/p/w500${queryResults.results[i].poster_path}" class="card-img-top skele-img" alt="...">
        <div class="card-body">
        <h6>${queryResults.results[i].title}</h6>
        </div>
        </button>`;
        newCard.classList.add('card');
        searchResults.append(newCard);
        if(queryResults.page >searhPageNum && searhPageNum < 6){
          searhPageNum++
          search()
        }
      }
    }
  })
}

