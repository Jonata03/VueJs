/*
import Vue from 'vue'
import axios from "axios"

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-3e22c-default-rtdb.firebaseio.com',
        }),
            Vue.prototype.$http = axios.create({
                baseURL: 'https://curso-vue-3e22c-default-rtdb.firebaseio.com'
            })
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            return config
        },error => Promise.reject(error))
    }
})
Vue.prototype.$http.interceptors.response.use(res => {
    // const array = []
    // for(let chave in res.data){
    //     array.push({
    //         id: chave, ...res.data[chave]
    //     })
    // }
    // res.data = array
    return res
},error => Promise.reject(error))
*/
