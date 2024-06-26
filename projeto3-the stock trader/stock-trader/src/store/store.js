import Vue from 'vue'
import Vuex from 'vuex'
import acoes from "@/store/modules/acoes";
Vue.use(Vuex)

export default new Vuex.Store({
   modules:{
       acoes
   }
})