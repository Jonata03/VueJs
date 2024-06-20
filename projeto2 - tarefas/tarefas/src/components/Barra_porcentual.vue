<template>
  <div class="barra-container">
    <div class="carregamento" :style="{width: porcentagem + '%'}">
      <p class="porcentagem">{{ porcentagem + '%' }}</p>
    </div>
  </div>
</template>
<script>
import barramento from "../barramento";

export default {
  data() {
    return {
      texos:[],
      porcentagem: 0
    }
  },
  created() {
    barramento.onQuantidadeTasks(quantidade => {
      this.porcentagem = quantidade
    })
  },
}
</script>


<style scoped>
.barra-container {
  border: 1px white solid;
  width: 80%;
  height: 25px;
  display: flex;
  position: relative;
  margin-bottom: 2em;
}

.carregamento {
  background-color: green;
  height: 100%;
  width: 0;
}

.carregamento p {
  position: absolute;
  left: 49%;
  bottom: -13px;
}

</style>