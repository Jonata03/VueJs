<template>
  <div class="lembrete-container">
    <div v-for="(value,indice) in textos" :key="indice"
         class="lembrete"
         :class="{'concluido': value.concluido,'naoConcluido':!value.concluido}"
         @click="tarefaConcluida(indice)">
      <p>{{ value.texto }}</p>
      <button class="btn-fechar" @click="fecharTarefa(indice)"><strong>X</strong></button>
    </div>
  </div>

</template>
<script>
import barramento from "@/barramento";

let numeroTarefasAtivas = 0
export default {
  data() {
    return {
      textos: [],
      concluida: false
    }
  },
  computed: {
    statusTarefa() {
      return {}
    }
  },
  methods: {
    contaTarefasAtivas() {
      const total = this.textos.length
      const done = this.textos.filter(t => t.concluido).length
      const porcentagem = Math.round(done / total * 100) || 0
      console.log(porcentagem)
      barramento.setQuantidadeTasks(porcentagem)
    },
    tarefaConcluida(indice) {
      let teste = this.textos
      teste[indice].concluido = !teste[indice].concluido
      this.contaTarefasAtivas()
    },
    fecharTarefa(indice) {
      let lembrete = this.textos
      lembrete.splice(indice, 1)
      this.textos = lembrete
    },
    setTexto(texto) {
      barramento.setTexto(texto)
    },

  },
  created() {
    barramento.onTexto(texto => {
      this.textos = texto
    })
  },
}
</script>
<style scoped>
.lembrete-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.lembrete {
  border-left: 1em orangered solid;
  height: 7rem;
  width: 20rem;
  padding: 1em;
  font-size: 1.7em;
  margin: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  position: relative;
  border-radius: 15px;
}

.btn-fechar {
  background-color: darkorange;
  border: 1px solid white;
  padding: 8px 10px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  position: absolute;
  right: 2%;
  top: 2%;
  font-weight: bolder;
  font-size: 1rem;
}

.concluido .btn-fechar {
  background-color: green;
}

.lembrete p {
  margin: 0;
}

.naoConcluido {
  background-color: orange;
}

.concluido {
  background-color: limegreen;
  border-left: 1em forestgreen solid;
}

.concluido p {
  text-decoration-line: line-through;
}

</style>