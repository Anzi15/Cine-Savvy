// getting elements
const cardList = document.getElementById('card');
const crouContainer = document.getElementById('carouselExampleAutoplaying');

const slides = [
 {
  img: document.getElementById('slideImg1'),
  txt: document.getElementById('slideName1')
 },
 {
  img: document.getElementById('slideImg2'),
  txt: document.getElementById('slideName2')
 },
 {
  img: document.getElementById('slideImg3'),
  txt: document.getElementById('slideName3')
 }
]

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDdjODhmYTBhYWNhMmE5Y2IwMmExMjY0MmFiYmI3YyIsInN1YiI6IjY0ODlmNzAyZDJiMjA5MDBhZDNlZWNkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sayDQQ9JRZ8G07pDh8EeA_VGP-3SPOqJw7gxQJ489sc'
  }
};
const trendingUrl = 'https://api.themoviedb.org/3/trending/movie/day';
fetch(trendingUrl, options)
  .then(response => response.json())
  .then((response) => {
    console.log(response)
    for(let i=0; i<response.results.length;i++){
      let newCard = document.createElement('div');
      newCard.classList.add('cards')
      // if(i<4){
      //   slides[i].img.src = `http://image.tmdb.org/t/p/w500${response.results[i].poster_path}`;
      //   slides[i].txt = response.results[i].title;
      // }
     
      newCard.innerHTML=` <button onclick="infoTab(${response.results[i]})" class="card" style="width: 18rem;">
      <img src="http://image.tmdb.org/t/p/w500${response.results[i].poster_path}" class="card-img-top" alt="...">
      <div class="card-body">
        <h6>${response.results[i].title}</h6>
        </div>
        </button>`;
        newCard.classList.add('card');
        cardList.append(newCard);
        if(i==19){
          slider(response)
          console.log('adfas')
        }
      }
    }
  )
  .catch(err => console.error(err));

  function infoTab(c){
    const releaseDate = c.release_date;
    const posterUrl = `http://image.tmdb.org/t/p/w500${poster_path}`
  }


const slider = (response)=>{
  console.log(response)
  let g = 0;
  for(let i=3; i<7; i++){
    slides[g].txt.innerHTML = response.results[i].title;
    slides[g].img.src = `http://image.tmdb.org/t/p/w500${response.results[i].backdrop_path}`;
    g++
  }
}