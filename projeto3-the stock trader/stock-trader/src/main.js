import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import vuetify from "vuetify/lib/components/Vuetify";
import store from './store/store'
Vue.config.productionTip = false

new Vue({
	router,
	vuetify,
	store,
	render: h => h(App),
}).$mount('#app')
