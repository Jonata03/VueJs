export default{
    state:{
        funds: 10000,
        acoes:[]
    },
    mutations:{
        comprarAcao(state, {acaoId, quantidade, acaoPreco}){
            const record = state.acoes.find(elemento => elemento.id == acaoId)
            if(record){
                record.quantidade += quantidade
            }else{
                state.acoes.push({
                    id: acaoId,
                    quantidade: quantidade,
                })
            }
            state.funds -= acaoPreco * quantidade
        },
        venderAcao(state,{acaoId, quantidade, acaoPreco}){
            const record= state.acoes.find(elemento => elemento.id == acaoId)
            if(record.quantidade > quantidade){
                record.quantidade -= quantidade
            }else{
                state.acoes.splice(state.acoes.indexOf(record),1)
            }
            state.funds += acaoPreco * quantidade
        }
    },
    actions:{
        venderAcao({commit},order) {
            commit('venderAcao', order)
        },

    },
    getters:{
        acoesPortfolio(state,getters){
            return state.acoes.map(acao => {
                const record = getters.acoes.find(elemento => elemento.id == acao.id){
                    return {
                        id: acao.id,
                        quantidade: acao.quantidade,
                        nome: record.nome,
                        preco: record.preco
                    }
                }
            })
        },
        funds(state){
            return state.funds
        }
    }
}