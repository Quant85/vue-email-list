

/* Istruzioni:
Genera 10 mail tramite api e stampale in una lista
Usate Vue e Axios.
La richiesta AJAX per gli indirizzi email inviatela al seguente link:
https://flynn.boolean.careers/exercises/api/random/mail
La lista di email va stampata a schermo nella pagina html. */

let emailApp = new Vue ({
  el:'#mailing_list',
  data: {
    emails:[],
  },
  methods: {
    getEmail: function (){
      //voglio 10 email differenti, quindi generero 10 volte la chiamata al'API
      for (let index = 0; index < 10; index++) {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(getEmail => {
          //console.log(getEmail.data['response']);
          let randomEmail = getEmail.data.response;
          console.log(randomEmail);
          this.emails.push(randomEmail);
        });
      }
    }
  },
  mounted() {
    this.getEmail();
  },

});