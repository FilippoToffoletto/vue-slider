/*
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
- al click su una thumb, visualizzare in grande l’immagine corrispondente
- aggiungere la classe active alla thumb attiva
Bonus:
1- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
2- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
Consigli del giorno:
- regola d’oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell’esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l’esercizio si riduce a poche righe ;)
Buon lavoro e buon divertimento!
*/

const {createApp} = Vue;

createApp({
    data(){
        return{
            photos:[
                '../img/01.jpg',
                '../img/02.jpg',
                '../img/03.jpg',
                '../img/04.jpg',
                '../img/05.jpg',
            ],
            counterPhoto: 0
        }
    },
    methods:{
        nextPhoto(){
          this.counterPhoto++;
          // se il contatore è più alto dell'ultimo elemento dell'array
          // lo resetto a 0
          if(this.counterPhoto > this.photos.length-1){
            this.counterPhoto = 0;
          }
          console.log(this.counterPhoto);
        },
        prevPhoto(){
          this.counterPhoto--;
          // se il contatore  inferiore a 0
          // lo faccio puntare all'ultimo elemnto dell'array
          if(this.counterPhoto < 0){
            this.counterPhoto = this.photos.length -1;
          }
          console.log(this.counterPhoto);
        }
      },
      created(){
        // questo metodo viene scatenato quando l'app è pronta ma non ho ancora letto il DOM
        // qui metto le funzioni che partono di default
        console.log('APP CREATA')
    },
    created(){
        // questo metodo viene scatenato quando l'app è pronta ma non ho ancora letto il DOM
        // qui metto le funzioni che partono di default
        console.log('APP CREATA')
    },
    mounted(){
        // questo metodo viene scatenato quando l'app è pronta
        // qui metto le funzioni che partono di default
        console.log('APP MONTATA')
        setInterval( () => {
            console.log('--> setInterval', this);
            this.nextPhoto();
          }, 3000)
        for (let i = 0; i < this.photos.length; i++) {
            const element = this.photos[i];
        }
    }
}).mount('#app');

