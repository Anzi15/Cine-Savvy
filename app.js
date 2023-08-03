// getting elements
const cardList = document.getElementById('card');
const searchResults = document.getElementById('seachResults');
const searchSubHeading = document.getElementById('seachSubHeading');
const searchRow = document.getElementById('searchRow');


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
    if(section == "discover"){
      subHeading.innerHTML = `Personalized Cinema`
      url= `https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=${t}`
    }
    if(section =="trending"){
      subHeading.innerHTML = `Hot Picks`
      url = `https://api.themoviedb.org/3/trending/movie/day?include_adult=false&page=${t}`;
    }
    if(section == "popular"){
      subHeading.innerHTML = `All-Time Favorites`
      url = `https://api.themoviedb.org/3/movie/popular?include_adult=false&language=en-US&page=${t}`
    }
    if(section=="top-rated"){
      subHeading.innerHTML = `Viewer's choice`
      url = `https://api.themoviedb.org/3/movie/top_rated?include_adult=false&language=en-US&page=${t}`
    }
    fetch(url, options)
      .then(response => response.json())
      .then((response) => {
        for(let i=0; i<response.results.length;i++){
          let newCard = document.createElement('div');
        if( response.results[i].title == 'Lusty Discipline in Uniform'|| response.results[i].title == 'PAW Patrol: The movie'){
          return;
        }else{
          newCard.classList.add('cards')
          newCard.innerHTML=` <button onclick="infoTab(${response.results[i]})" class="card responsive-cards">
          <img draggable="false" src="http://image.tmdb.org/t/p/w500${response.results[i].poster_path}" class="card-img-top skele-img" alt="...">
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
  searchSubHeading.innerHTML = `Search Results`
  searchRow.classList.remove('none')
const inputValue = searched.value;
const query = inputValue.replace(/ /g, '%20');

var searhPageNum = 1;
  fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${searhPageNum}`, options)
  .then(queryResults => queryResults.json())
  .then((queryResults) => {
    console.log(queryResults);
    for(let i=0; i<queryResults.results.length; i++){
      if(queryResults.results[i].poster_path !== null){
        let newCard = document.createElement('div');
        newCard.classList.add('cards')
        newCard.innerHTML=`
        <button onclick="infoTab(${queryResults.results[i]})" class="card responsive-cards">
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
