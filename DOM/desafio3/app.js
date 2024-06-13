new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    watch:{
        resultado(){
            setTimeout(()=> {
                this.valor = 0
            },2000)
        }
    },
    computed:{
        resultado (){
            return this.valor === 1 ? "Valor igual" : "Valor Diferente" 
        }
    },
    methods:{
       
    }
});