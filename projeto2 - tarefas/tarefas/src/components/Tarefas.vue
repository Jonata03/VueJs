<template>
  <div>
    <div v-for="texto in textos"
         class="lembrete"
         @click="finalizarTarefa"
         >
      {{texto}}
    </div>
  </div>

</template>
<script>
import barramento from "@/barramento";

export default {
  data(){
    return{
      textos : []
    }
  },
  methods:{
    finalizarTarefa(){

    }
  },
  created() {
    barramento.onTexto(texto =>{
      this.textos = texto
    })
  }
}
</script>


<style scoped>

</style>