<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong>{{acao.nome}} <small>(preco: {{acao.preco}})</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Quantidade"
                      type="number"
                      class="mr-2"
                      v-model.number="quantidade"/>
        <v-btn class="green darken-3 white--text"
               :disabled="quantidade<=0 || !Number.isInteger(quantidade)"
               @click="comprarAcao"
        >Comprar</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  props:['acao'],
  data(){
    return{
      quantidade: 0
    }
  },
  methods:{
    comprarAcao(){
      const ordem = {
        acaoId: this.acao.id,
        acaoPreco: this.acao.preco,
        quantidade: this.quantidade
      }
      console.log(ordem)
      this.quantidade = 0
    }
  }

}
</script>


<style scoped>

</style>