import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'
import UsuarioEditar from "@/components/usuario/UsuarioEditar.vue";
import UsuarioDetalhe from "@/components/usuario/UsuarioDetalhe.vue";
import UsuarioLista from "@/components/usuario/UsuarioLista.vue"
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[{
        name:'inicio',
        path:'/',
        component: Inicio
    },{
        path: '/usuario',
        component: Usuario,
        props: true,
        children:[
            {path: '',component: UsuarioLista},
            {path: ':id',component: UsuarioDetalhe, props: true},
            {path: ':id/editar',component: UsuarioEditar, props: true,name:'editarUsuario'},
        ]
    },{
        path: '/redirecionar',
        redirect: '/usuario'
    },{
        path:'*',
        redirect:'/'
    }]
})