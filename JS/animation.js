const searched = document.getElementById('search');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');

const infoTitle = document.getElementById('infoTitle');
const infoImg = document.getElementById('infoImg');
const infoGenre = document.getElementById('infoGenre');
const infoRating = document.getElementById('ratingStars');
const infoDate = document.getElementById('infoDate');
const infoLang = document.getElementById('infoLang');
const infoOverview = document.getElementById('infoOverview');
const infoContainer = document.getElementById('infoContainer');
const infomodal = document.getElementById('cookiesPopup');

// navLinks.forEach(addEventListener(onclick,this.classList.remove('active')))
function navStatus(link){
  link1.classList.remove('active');
  link2.classList.remove('active');
  link3.classList.remove('active');
  link4.classList.remove('active');
  link.classList.add('active');
}

function inputClick() {
    type = false;
    searched.style.color = 'white';
    setTimeout(() => {
      searched.value=""
    }, 10);
  }
  
  var type;
  let count = 0;
  const speed = 100;
  var txt = [
    'Avengers    ',
    'Barbie    ',
    'Fast x    ',
    'Black Adam   ',
    'Spiderman    ',
    'Puss in the boots    '
  ];
  var txtNum = 0;
  let p = txt[txtNum].length+1;
  
  function typeWriter() {
    if (txt[txtNum].length > count) {
      searched.value += txt[txtNum].charAt(count);
      count++;
      if(type == undefined){
        setTimeout(typeWriter, speed); // Delay each iteration with "speed" milliseconds
      }else{
        searched.value=''
      }
    } else {
      if (p !== 0) {
        p--;
        let reverse = txt[txtNum].slice(searched.value, p);
        searched.value = reverse;
        if(type == undefined){
          setTimeout(typeWriter, speed); // Delay each iteration with "speed" milliseconds
        }else{
            searched.value=''
          }
      } else {
        if(searched.value.trim().length !== 0){
          searched.value = '';
        }
        if (txtNum == 5) {
          count = 0;
          txtNum = 0;
          if(type == undefined){
            setTimeout(typeWriter, speed); // Delay for the next sentence after clearing the input
          }else{
            searched.value=''
          }
        } else if (txtNum < 6) {
          count = 0;
          txtNum++;
          p=txt[txtNum].length;
          if(type == undefined){
            setTimeout(typeWriter, speed); // Delay for the next sentence after clearing the input
          }else{
            searched.value=''
          }
        }
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', typeWriter);

  function infoTab(id){
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    .then(response => response.json())
    .then((response) => {
    console.warn(response)
    infoTitle.innerText = response.title;
    infoImg.src = `http://image.tmdb.org/t/p/w500${response.backdrop_path}`
    infoDate.innerText = response.release_date
    infoLang.innerText= response.original_language
    infoOverview.innerText= response.overview;
    loadGenre(response.genres)
    renderStars(response.vote_average);
    overlayActive();
    })
    .catch(err => console.error(err))
    
  }
    function renderStars(outOfTen){
      let rating = (outOfTen / 2);
      rating = Math.round(rating)
      infoRating.innerHTML=''
      for(let i=0; i<5; i++){
      const starDiv = document.createElement('div');
      if(rating>0){
        starDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>` 
        infoRating.appendChild(starDiv)
        rating--   
      }else{
        starDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><style>svg{fill:#ffffff}</style><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>`;
        infoRating.appendChild(starDiv)
      }
  }
    }

    function loadGenre(genres){
      infoGenre.innerHTML=''
      let genreNum;
      genres.length>3? genreNum=3: genreNum=genres.length
      for (let i = 0; i < genreNum; i++) {
        let newGenre = document.createElement('div');
        newGenre.classList.add('genre');
        newGenre.innerText = genres[i].name;
        infoGenre.appendChild(newGenre)
      }
    }

  function overlayActive(){
    document.body.classList.add('body')
    overlay.classList.remove('none')
  }
  function overlayDisable(){
    document.body.classList.remove('body')
    overlay.classList.add('none')
  }