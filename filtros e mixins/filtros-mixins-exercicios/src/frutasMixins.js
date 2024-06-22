export default{
    data() {
        return {
            cpfCliente: '00600500475',
            fruta: '',
            frutas: ['banana', 'maca', 'laranja']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}