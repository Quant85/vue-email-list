/* Bonus (facolativo):
Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato
Fate una cartella bonus. */

let app = new Vue ({
  el:"#app-grid",
  data: {
    grid:[],
    row:6,
    cell:6,
    color:"",
  },
  methods: {
    generaGriglia() {
      for (var i = 0; i < this.row; ++i) {
        this.grid.push([]);
                for (var k = 0; k < this.cell; ++k) {
                    this.grid[i].push({num:""});
                    //console.log(this.grid[i][k]);
                }
            }
    },
    getRandomNumber(n,m) {
      axios
      .get('https://flynn.boolean.careers/exercises/api/random/int')
      .then(getNumber => {
        let randomNumber = getNumber.data.response;
        console.log(randomNumber);
        this.grid[n][m].num = randomNumber;
      });
    }

  },
  mounted() {
    this.generaGriglia();
  },
});




