<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <hr>
<!--    :to="`/usuario/${id}/editar`"-->
    <p><strong>codigo: </strong>{{ id }}</p>
    <router-link tag="button" primario
                 :to="{name: 'editarUsuario', params:{ id },
                 query:{completo: true,lingua:'pt'}}">
      Editar
    </router-link>
  </div>
</template>
<script>
export default{
  props:['id'],

  /*data(){
    return{
      id: this.$route.params.id
    }
  },
  watch:{
    $route(to,from){
      this.id = to.params.id
    }
  },*/
}

</script>
<style scoped>

</style>