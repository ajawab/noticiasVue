Vue.component('imagenes1', {
    template:/*html*/
    `
    <div>
        <imagenes1H :datos="datosP"></imagenes1H>
    </div>
    `,
    computed: {
    },
    data () {
        return {
            datosP: ''
        }
    },
    methods: {
        consulta () {
            axios.post('http://perasperaadastra.xibalbacv.dx.am/getN/')
                .then(function (response) {
                    this.datosP = response.data.items[0]
                    console.log(this.datosP)
                    console.log('this.datosP.imagen9999999')
                    this.datosP = this.datosP.imagen
                console.log(this.datosP)
                })
                .catch(function (error) {
                console.log(error)
                })
                console.log('afuwalllll')
                console.log(this.datosP)
        },
        cliscl (){
            console.log('aliciaaaaaaaa')
            console.log(this.datosP)
        }
    },
    mounted () {
    }
});