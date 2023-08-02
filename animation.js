const searched = document.getElementById('search');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');


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
    'Avengers   ',
    'Barbie   ',
    'Fast x   ',
    'Black Adam  ',
    'Spiderman   ',
    'Puss in the boots   '
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