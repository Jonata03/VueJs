import Vue from 'vue'
import Router from 'vue-router'

import Portfolio from './components/portfolio/Portfolio'
import Inicio from "@/components/Inicio.vue";
import Acoes from '@/components/acoes/acoes.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Inicio },
        { path: '/acoes', component: Acoes },
        { path: '/portfolio', component: Portfolio },
        // { path: '/stocks', component: Stocks },
    ]
})