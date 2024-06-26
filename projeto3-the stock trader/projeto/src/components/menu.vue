<template>
  <div id="menu">
    <div class="botoesPrincipais">
      <h1><strong>stock</strong>Trader</h1>
      <ul>
        <li class="btn-principal">inicio</li>
        <li class="btn-principal">portifolio</li>
        <li class="btn-principal">ações</li>
      </ul>
    </div>
    <ul>
      <li class="btn-princiapa">finalizar dia</li>
      <li class="btn-princiapa">salvar & carregar</li>
      <li class="saldo">saldo:{{saldo}}</li>
    </ul>
  </div>
</template>
<script setup>
export default {
  data(){
    return{
      saldo: 8000
    }
  }
}
</script>
<style scoped>
.botoesPrincipais{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
ul{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>