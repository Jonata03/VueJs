<template>
  <div class="acoes">
    <v-layout row wrap class="mt-5">
      <Acao v-for="acao in acoes" :key="acao.id" :acao="acao"/>
    </v-layout>

  </div>
</template>
<script>

import Acao from './acao.vue'

export default {
  components: {Acao},
  computed:{
    acoes(){
      console.log(this.$store.getters.acoes)
      return this.$store.getters.acoes
    }
  }
}
</script>
<style scoped>

</style>