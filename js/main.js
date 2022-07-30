var app = new Vue({
    el: '#app',
    data: {
      counter: 0,
      cocktails: [
                  {
                    'nome': 'Old Fashioned',
                    'prezzo': 6,
                    'url': 'img_1.jpg',
                  },
                  {
                    'nome': 'Hurricane',
                    'prezzo': 6,
                    'url': 'img_2.jpg'
                  },
                  {
                    'nome': 'Mixer Planet',
                    'prezzo': 6,
                    'url': 'img_3.jpg'
                  },
                  {
                    'nome': 'Angelo Azzurro',
                    'prezzo': 6,
                    'url': 'img_4.jpg'
                  },
                  {
                    'nome': 'Smoky Fizz',
                    'prezzo': 6,
                    'url': 'img_5.jpg'
                  },
                  {
                    'nome': 'Mojito',
                    'prezzo': 6,
                    'url': 'img_6.jpg'
                  },
                  {
                    'nome': 'Moscow Mule',
                    'prezzo': 6,
                    'url': 'img_7.jpg'
                  },
                  {
                    'nome': 'Solero',
                    'prezzo': 6,
                    'url': 'img_8.jpg'
                  },
                ],
        
    },
    methods:{
      incrementoPrice(indice){
        
        if(this.cocktails[indice].prezzo >= 10){
      }else{
          this.cocktails[indice].prezzo += 0.25;
        }
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