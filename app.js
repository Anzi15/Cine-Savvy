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
let howMuch = 6;
for(let t=1; t<howMuch; t++){
  const url = `https://api.themoviedb.org/3/discover/movie?page=${t}`;
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
          if(i==19){
            slider(response)
          }
        }
      }
    )
   
}
// const url2 = 'https://api.themoviedb.org/3/trending/anime/day?447c88fa0aaca2a9cb02a12642abbb7c=THE_KEY&page=1';
// const url2 = 'https://api.themoviedb.org/3/discover/movie?page=2';
// const url3 = 'https://api.themoviedb.org/3/discover/movie?&page=3';
// const url4 = 'https://api.themoviedb.org/3/discover/movie?&page=4';

  
//   fetch(url2, options)
//    .then(response2 => response2.json())
//    .then((response2) => {
//      console.log(response2)
//      for(let i=0; i<response2.results.length;i++){
//       if(response2.results[i].title !== undefined){
//         var title = response2.results[i].title;
//       }else{
//         var title = response2.results[i].name;
//       }
//       let newCard = document.createElement('div');
//       newCard.classList.add('cards')
//       newCard.innerHTML=` <button onclick="infoTab(${response2.results[i]})" class="card responsive-cards">
//       <img draggable="false" src="http://image.tmdb.org/t/p/w500${response2.results[i].poster_path}" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h6>${title}</h6>
//         </div>
//         </button>`;
//         newCard.classList.add('card');
//         cardList.append(newCard);
//       } })
      
//       fetch(url3, options)
//        .then(response3 => response3.json())
//        .then((response3) => {
//          console.log(response3)
//          for(let i=0; i<response3.results.length;i++){
//           if(response3.results[i].title !== undefined){
//             var title = response3.results[i].title;
//           }else{
//             var title = response3.results[i].name;
//           }
//           let newCard = document.createElement('div');
//           newCard.classList.add('cards')
//           newCard.innerHTML=` <button onclick="infoTab(${response3.results[i]})" class="card responsive-cards">
//           <img draggable="false" src="http://image.tmdb.org/t/p/w500${response3.results[i].poster_path}" class="card-img-top" alt="...">
//           <div class="card-body">
//             <h6>${title}</h6>
//             </div>
//             </button>`;
//             newCard.classList.add('card');
//             cardList.append(newCard);
//           } })
          
//           fetch(url4, options)
//            .then(response3 => response3.json())
//            .then((response3) => {
//              console.log(response3)
//              for(let i=0; i<response3.results.length;i++){
//               if(response3.results[i].title !== undefined){
//                 var title = response3.results[i].title;
//               }else{
//                 var title = response3.results[i].name;
//               }
//               let newCard = document.createElement('div');
//               newCard.classList.add('cards')
//               newCard.innerHTML=` <button onclick="infoTab(${response3.results[i]})" class="card responsive-cards">
//               <img draggable="false" src="http://image.tmdb.org/t/p/w500${response3.results[i].poster_path}" class="card-img-top" alt="...">
//               <div class="card-body">
//                 <h6>${title}</h6>
//                 </div>
//                 </button>`;
//                 newCard.classList.add('card');
//                 cardList.append(newCard);
//               } })
  
    // .catch(err => console.error(err));

  function infoTab(c){
    const releaseDate = c.release_date;
  }


// const slider = (response1)=>{
//   console.log(response1)
//   let g = 0;
//   for(let i=0; i<4; i++){
//     slides[g].txt.innerHTML = response1.results[i].title;
//     slides[g].img.src = `http://image.tmdb.org/t/p/w500${response1.results[i].backdrop_path}`;
//     g++
//   }
// }