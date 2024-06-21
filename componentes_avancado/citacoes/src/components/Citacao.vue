<template>
  <div class="citacao">
        <slot name="autor"></slot>
        <slot></slot>
        <slot name="fonte"></slot>
<!--    o slot pega tudo de dentro da tag do componente citacao em citaçoes-->
  </div>
</template>

<script>
export default {
  created() {
    console.log('created')
  },
  destroyed() {
    console.log('destroyed')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  }
}
</script>

<style scoped>
.citacao {
  border: 1px solid #DDD;
  background-color: rgba(0, 0, 0, .1);
  padding: 25px;
  max-width: 450px;
}
h1{
  color: red!important;
}
/*é possivel aplicar estilos tanto no slot quanto no componente irmao que esta atribuindo o valor pra ca*/
</style>
<!--//  esse !important mostra que esse estilo deve se sobrepor a qualquer outro-->
