import acoes from "@/components/data/acoes"

export default {
    state: {
        acoes: []
    },
    mutations: {
        setAcoes(state, acoes) {
            state.acoes = acoes
        }
    },
    actions: {
        comprarAcao({commit}, order) {
            commit()
        },
        iniciarAcoes({commit}) {
            console.log('iniciando acoes')
            commit('setAcoes', acoes)
        }
    },
    getters: {
        acoes(state) {
            return state.acoes
        }
    }
}