Vue.component('imagenes1', {
    template:/*html*/
    `
    <div>
        <imagenes1H :datos="datosP"></imagenes1H>
        sssss{{numero}}xxx
        <button @click="peliculas">aaaaaaaaa</button>
        <ul v-for="item of pelis">
            <li>{{item.imagen}}</li>
        </ul>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['numero','pelis'])
    },
    data () {
        return {
            datosP: ''
        }
    },
    methods: {
        ...Vuex.mapActions(['peliculas']),
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