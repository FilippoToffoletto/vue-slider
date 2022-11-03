const arrayImg = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg',
]
  
// "CHIAMO" I MIEI CONTENITORI DELLE IMG
const containerImgLg = document.querySelector('.img-lg');
const containerImgXs = document.querySelector('.img-xs');
  
// CREO LE COSTANTI CHE POI USERO' PER INTERAGIRE CON L'HTML
let imgLg = "";
let imgXs = "";
  
// CREO IL CONTATORE PER LA GESTIONE DELLE CLASSI
let counterImg = 0;
  
 
// "SCOMPONGO" L'ARRAY USANDO IL CICLO FOR E STAMPO I TAG CHE MI SERVONO
for(let i = 0; i < arrayImg.length; i++){
    //CREO IL TAG IMG PER IL BOX XL
    imgLg = `
    <img class="xl hide" src="img/${arrayImg[i]}" alt="${arrayImg[i]}">
    `;
    //CREO IL TAG IMG PER IL BOX XS (THUMBNAILS)
    imgXs = `
    <img class="xs" src="img/${arrayImg[i]}" alt="${arrayImg[i]}">
    `;
    
    // STAMPO I TAG CREATI NEI BOX NEL HTML
    containerImgLg.innerHTML += imgLg;
    containerImgXs.innerHTML += imgXs;
}
  
// PRENDO IL COINTAINER CHE UTILIZZERO' PER L'OVER
const carousel = document.querySelector('.carousel');
  
// CREO LA SITUAZIONE DI DEFAULT CHE MI OCCORRE:
// PRENDO I CONTENITORI CHE MI SERVIRANNO
const arrayImgLg = document.getElementsByClassName('xl');
const arrayImgXs = document.getElementsByClassName('xs');
  
// AGGIUNGO E TOLGO CLASSI PER AVERE LA VISUALIZZAZIONE DI DEFAULT
arrayImgLg[counterImg].classList.remove('hide');
arrayImgLg[counterImg].classList.add('active');
  
arrayImgXs[counterImg].classList.add('active');
  
// CREO DUE COSTANTI CON I MIEI BOTTONI PER SCROLLARE LE IMMAGINI
const up = document.querySelector('.btn.up');
const down = document.querySelector('.btn.down');

// do un intervallo per il cambio immagini e una variabile globale
let changeTime = 1.7 ;
let startInterval;

// prendo il container con le immagini di sx
const stopInterval = document.querySelector('.carousel');
  
// loop che cambia le immagini
startInterval = setInterval(function(){
  upDown(true);
}, changeTime * 1000)

// fermo l'intervallo con l'hover del mouse sul container
stopInterval.addEventListener('mouseover', function(){
    clearInterval(startInterval);
})
// faccio ripartire l'intervallo con l'hover del mouse sul container
stopInterval.addEventListener('mouseout', function(){
    startInterval = setInterval(function(){
        upDown(true);
      }, changeTime * 1000)  
})


  
down.addEventListener('click',function(){
    upDown(true);
})
  
up.addEventListener('click', function (){
    upDown(false);
})
  
  
  
function upDown(isDown){
    arrayImgLg[counterImg].classList.remove('active');
    arrayImgLg[counterImg].classList.add('hide');
  
    arrayImgXs[counterImg].classList.remove('active');
  
    if(isDown){
      counterImg++;
      if(counterImg === arrayImg.length) counterImg = 0;
    }else {
      counterImg--;
      if(counterImg < 0) counterImg = arrayImg.length -1;
    }
  
    arrayImgLg[counterImg].classList.remove('hide');
    arrayImgLg[counterImg].classList.add('active');
  
    arrayImgXs[counterImg].classList.add('active')
}
  