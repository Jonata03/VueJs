<template>
	<div id="app">
		<h1>Tarefas</h1>
    <BarraPorcentual />
    <NovaTarefa />
    <Tarefas />
	</div>
</template>

<script>
import BarraPorcentual from "@/components/Barra_porcentual.vue";
import NovaTarefa from "@/components/Nova_tarefa.vue";
import Tarefas from "@/components/Tarefas.vue"
export default {
components:{
  BarraPorcentual,
  NovaTarefa,
  Tarefas
}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
