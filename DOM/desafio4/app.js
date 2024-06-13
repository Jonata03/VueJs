new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		mudaLetra: 'mudaLetra',
		girar: 'girar',
		escolherClass: 'quadrado2',
		ativado:false,
		cor5:"",
		estilo5: {
			width: '50px',
			heigth:'50px',
			padding:'50px'
		},
		carregamento: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			},1000)
		},
		confereTrue(){
			return this.ativado ? this.escolherClass: ''
		},
		iniciarProgresso() {
			let timer = setInterval(()=>{
				return `${this.carregamento <= 99 ? this.carregamento++ : clearInterval(timer)}`
			},100)
			
		}
	},
	
	
})
