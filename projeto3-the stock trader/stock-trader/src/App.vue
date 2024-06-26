<template>
<div id="app">
  <Menu />
  <router-view></router-view>
</div>
</template>

<script>
import Menu from "@/components/menu.vue";

export default {
  components: {
    Menu
  },
  created(){
    this.$store.dispatch('iniciarAcoes')
  }

}
</script>

<style>

</style>

