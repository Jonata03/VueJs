<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>nome do usuario: <strong>{{ inverterNome() }}</strong></p>
    <p>Idade do Usuario: <strong>{{ idade }}</strong></p>
    <button @click="reiniciarNome">Reinicar nome</button>
  </div>
</template>

<script>
import barramento from '@/barramento'

export default {
  props: {
    idade: Number
  },
  data() {
    return {
      nome: 'pedro'
    }
  },
  methods: {
    inverterNome() {
      return this.nome.split('').reverse().join('')
    },
    reiniciarNome() {
      const antigo = this.nome
      this.nome = 'pedro'
      this.$emit('nomeMudou', {
        novo: this.nome,
        antigo
      })
    }
  },
  created() {
    barramento.quandoIdadeMudar(idade => {
      this.idade = idade
    })
  }

}
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
