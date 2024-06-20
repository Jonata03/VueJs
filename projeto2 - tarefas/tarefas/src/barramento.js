import Vue from 'vue'
export default new Vue({
    methods:{
        setTexto(texto){
            this.$emit('textoConfirmado',texto)
        },
        onTexto(callback){
            this.$on('textoConfirmado',callback)
        }

    }
})