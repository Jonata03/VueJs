new Vue({
    el: '#app',
    data: {
        resultadoJogo: false,
        btnIniciarJogo: true,
        vitoria: true,
        porcentagemVidaJogador: 100,
        porcentagemVidaMonstro: 100,
        textoBtnIniciarJogo: "Iniciar jogo",
        log: [ ]
    },
    methods: {
        iniciaJogo() {
            this.btnIniciarJogo = !this.btnIniciarJogo
            this.resultadoJogo = false
            this.porcentagemVidaMonstro = 100
            this.porcentagemVidaJogador = 100
            this.log=[]
        },
        ataque(){
            this.dano('porcentagemVidaMonstro',5,10,"jogador","monstro",'player')
            this.dano('porcentagemVidaJogador',5,10,'monstro','jogador','monster')
        },
        dano(quemRecebeu,min,max,fonte,alvo,cls){
            const dano = this.numeroAleatorio(min,max)
            this[quemRecebeu] -= dano
            this.registrarLog(`${fonte} ATINGIU ${alvo} COM ${dano} de dano`,cls)
            if(this[quemRecebeu]<=0){
                this[quemRecebeu]=0
                this.verificaVencedor()
            }
        },
        verificaVencedor(){
            this.resultadoJogo = true
            this.btnIniciarJogo = true
            if (this.porcentagemVidaJogador <= 0) {
                this.vitoria = false
            }else{
                this.vitoria = true
            }
        },
        ataqueEspecial() {
            this.porcentagemVidaMonstro -= this.numeroAleatorio(0, 2)
            this.ataque()
        },
        curar() {
            let cura = this.numeroAleatorio(8, 13)
            this.porcentagemVidaJogador += cura
            if (this.porcentagemVidaJogador >= 100) {
                this.porcentagemVidaJogador = 100
                cura=0
            }
            this.registrarLog(`O JOGADOR CUROU ${cura} DE VIDA`,"cura")

        },
        desistir() {
            this.resultadoJogo = true
            this.vitoria = false
            this.btnIniciarJogo = true
            this.textoBtnIniciarJogo = "Iniciar Novo Jogo"
        },
        numeroAleatorio(minimo = 0, maximo) {
            return Math.floor(Math.random() * (maximo - minimo + 1) + minimo)
        },
        registrarLog(text, cls){
            this.log.unshift({text, cls})
        }
    },
    computed: {},
    watch: {
    }
})