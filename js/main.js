var app = new Vue({
    el: '#app',
    data: {
      counter: 0,
      cocktails: [
                  {
                    'showDescription': true,
                    'nome': 'Old Fashioned',
                    'prezzo': 6,
                    'url': 'img_1.jpg',
                    'descrizione': "L'Old Fashioned è un cocktail per appassionati di whisky. Si può preparare con Bourbon o con Rye Whiskey, una zolletta di zucchero sciolta nel bicchiere, due gocce di angostura, poca soda e del ghiaccio."
                  },
                  {
                    'showDescription': true,
                    'nome': 'Hurricane',
                    'prezzo': 6,
                    'url': 'img_2.jpg',
                    'descrizione': "L'Hurricane è un cocktail alcolico dolce a base di rum, succo di limone e sciroppo di frutto della passione. Originario di New Orleans, è tradizionalmente servito in un bicchiere di vetro alto e sinuoso."
                  },
                  {
                    'showDescription': true,
                    'nome': 'Mixer Planet',
                    'prezzo': 6,
                    'url': 'img_3.jpg',
                    'descrizione': "E' un cocktail dolce e fresco a base di rum bianco, maraschino, succo di ananas e sciroppo di granatina."
                  },
                  {
                    'showDescription': true,
                    'nome': 'Angelo Azzurro',
                    'prezzo': 6,
                    'url': 'img_4.jpg',
                    'descrizione': "Il drink deve il suo celestiale colore alla presenza del Blue Curacao, un liquore a base di scorze di laraha, l'arancia dal distintivo sapore amaro che cresce esclusivamente sull'isola di Curacao."
                  },
                  {
                    'showDescription': true,
                    'nome': 'Smoky Fizz',
                    'prezzo': 6,
                    'url': 'img_5.jpg',
                    'descrizione': "Mettete nello shaker il succo d'ananas, lo sciroppo di zucchero, un rametto di rosmarino e pestate delicatamente."
                  },
                  {
                    'showDescription': true,
                    'nome': 'Mojito',
                    'prezzo': 6,
                    'url': 'img_6.jpg',
                    'descrizione': "Un drink bevibilissimo, dotato di grande equilibrio, sempre in bilico tra una tensione acida, dolcezza e il gusto tagliente della menta, con il sapore fruttato e caldo del rum a fare da collante."
                  },
                  {
                    'showDescription': true,
                    'nome': 'Moscow Mule',
                    'prezzo': 6,
                    'url': 'img_7.jpg',
                    'descrizione': "Il Moscow Mule ha un sapore tipicamente fresco e pungente, dato dalla presenza di vodka, ginger beer, succo di lime e cannella."
                  },
                  {
                    'showDescription': true,
                    'nome': 'Solero',
                    'prezzo': 6,
                    'url': 'img_8.jpg',
                    'descrizione': "Un drink estivo fruttato ed analcolico"
                  },
                ],
    },
    methods:{
      incrementoPrice(indice){ 
        if(this.cocktails[indice].prezzo >= 10){
        }else{
            this.cocktails[indice].prezzo += 0.25;
        }
      },
      showDesc(indice){
        this.cocktails[indice].showDescription = !this.cocktails[indice].showDescription
      }

    },
    created(){
        this.cocktails.forEach(element => {
          setInterval(() =>{
          if(element.prezzo <= 2){
          }else{
            element.prezzo -= 0.25; 
          }
        }, 50000);
        });     
  },
  })