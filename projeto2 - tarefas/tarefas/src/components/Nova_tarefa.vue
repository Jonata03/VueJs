<template>
  <div>
    <form>
      <input type="text"
             autofocus
             placeholder="Nova Tarefa?"
             class="campo-texto"

             @keypress.enter.prevent="criarTarefa">
<!--            .prevente nao deixa que a pagina recarregue-->
      <a class="btn-submit"
         @click="criarTarefa" >+</a>
    </form>
  </div>
</template>
<script>
import barramento from "@/barramento";
export default {
  data(){
    return{
      textos:[]
    }
  },
  methods:{
    setTexto(texto){
      barramento.setTexto(texto)
    },
    criarTarefa(){
      let texto = document.querySelector(".campo-texto")
      let conteudoTexto = texto.value
      this.textos.unshift({texto: conteudoTexto, concluido: false})
      barramento.setTexto(this.textos)
      texto.value = ""
    }
  }
}

</script>
<style scoped>
form {
  display: flex;
  flex-direction: row;
  align-items: center;
}
  .btn-submit{
    border-radius:0 2px 2px 0;
    border: 1px solid white;
    color: white;
    padding: .65em;
    background-color: cornflowerblue;
    cursor:pointer;
  }
  .btn-submit:hover{
    background-color: #3975f8;
  }
  .campo-texto{
    background-color: rgba(204, 204, 204, 0.27);
    border: 1px solid white;
    border-right: none;
    height: 1.9em;
    font-size: 20px;
    width: 20rem;
    margin: 0;
    border-radius: 2px 0 0 2px;
    color: white;
  }
  .campo-texto:focus{
    outline: none;
    background-color: rgba(204, 204, 204, 0);
  }


</style>