<template>
  <div id="menu">
      <ul><p><strong>stock</strong>Trader</p>
        <router-link tag="li" to="/" class="btn-principal">inicio</router-link>
        <router-link  tag="li" to="/portfolio" class="btn-principal">portifolio</router-link>
        <router-link tag="li" to="/acoes" class="btn-principal">ações</router-link>
      </ul>
    <ul>
      <li class="btn-principal semQuebra">finalizar dia</li>
      <li class="btn-principal semQuebra">salvar & carregar</li>
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
#menu{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  box-shadow: 0px -9px 20px black;
  padding: 0;
  height: 5em;
  padding: 0 3em;
}

.semQuebra{
    white-space: nowrap;
}

p{
  margin: 0;
  font-size: 1.5em;
  margin-right: 1em;
}
ul{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 100%;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  width: 25%;
}
.btn-principal{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  //padding: 2em;
  cursor:pointer;
  padding: 0 1em;
}
.btn-principal:hover{
  background-color: #ccc;
}
</style>