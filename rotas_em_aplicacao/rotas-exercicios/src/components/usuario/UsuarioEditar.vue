<template>
  <div class="usuario-editar">
    <h3>Usuario Editar</h3>
    <hr>
    <p><strong>codigo:</strong>{{ id }}</p>
    <p><strong>completo:</strong>{{ $route.query.completo ? 'Sim' : 'Não' }}</p>
    <p><strong>Língua:</strong></p> {{$route.query.lingua}}

  </div>
</template>
<script>
export default {
  props:['id'],

}
</script>
<style scoped>

</style>