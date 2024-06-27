<template>
  <div class="portfolio">
    <v-layout row wrap class="mt-5">
      <Acao v-for="acao in acoes" :key="acao.id" :acao="acao"/>
    </v-layout>

  </div>
</template>
<script>

import {mapGetters} from "vuex";
import Acao from "./acao.vue";

export default {
  components: {Acao},
  computed:{
    ...mapGetters({
      acoes: 'acoesPortfolio'
    })
  }
}
</script>


<style scoped>

</style>