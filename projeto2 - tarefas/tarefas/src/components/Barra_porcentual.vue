<template>
  <div class="barra-container">
    <div class="carregamento">
      <p class="porcentagem">{{ porcentagem + '%' }}</p>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        porcentagem: '0'
      }
    }
  }
</script>


<style scoped>
.barra-container{
  border: 1px white solid;
  width: 80%;
  height: 1.5em;
  display: flex;
  position: relative;
  margin-bottom: 2em;
}
.carregamento{
  background-color: greenyellow;
  height: 100%;
  width: 0;
}
.carregamento p{
  position: absolute;
  left: 49%;
  bottom: -13px;
}
</style>