new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        mostraAlerta(){
            alert("Botao pressionado")
        },
        trocaValor(event){
            valor = event.target.value
            this.valor = valor
        }
    }
    
})