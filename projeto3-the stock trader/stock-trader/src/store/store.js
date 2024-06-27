import Vue from 'vue'
import Vuex from 'vuex'
import acoes from "@/store/modules/acoes";
import portfolio from "./modules/portfolio";

Vue.use(Vuex)

export default new Vuex.Store({
   modules:{
       acoes,
       portfolio
   }
})