new Vue({
    el: '#desafio',
    data:{
        nome: "jonata ",
        idade: 21,
        img: "img/camaro.jpg"
    },
    methods: {
        calculaIdade: function(){
            idade = this.idade * 3
            return idade
        },
        numeroRandomico: function(){
            numeroAleatorio = Math.random()
            return numeroAleatorio
                
        }
    }
})