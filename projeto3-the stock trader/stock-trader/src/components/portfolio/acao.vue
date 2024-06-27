<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title class="headline">
        <strong>
          {{ acao.nome }}
          <small>
            (preco: {{ acao.preco }} | Qtde:{{acao.quantidade}})
          </small>
        </strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Quantidade"
                      type="number"
                      class="mr-2"
                      v-model.number="quantidade"/>
        <v-btn class="blue darken-3 white--text"
               :disabled="quantidade<=0 || !Number.isInteger(quantidade)"
               @click="venderAcao"
        >Vender
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>
<script>
import{mapActions} from "vuex";

export default {
  props: ['acao'],
  data() {
    return {
      quantidade: 0
    }
  },
  methods: {
    ...mapActions({vendendoAcao: 'venderAcao'}),
    venderAcao() {
      const ordem = {
        acaoId: this.acao.id,
        acaoPreco: this.acao.preco,
        quantidade: this.quantidade
      }
      this.vendendoAcao(order)
      // this.$store.dispatch('venderAcao', order)
      this.quantidade = 0
    }
  }

}
</script>


<style scoped>

</style>