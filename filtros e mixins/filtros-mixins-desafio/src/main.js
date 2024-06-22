import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('contaElementos', function (valor){
	let arr = valor
	arr = arr.split(' ')
	let resultado = [];
	for (let i of arr){
		resultado.push(i)
		resultado.push("("+i.length+")")
	}
	return resultado.join(" ")


})

new Vue({
	render: h => h(App),
}).$mount('#app')
