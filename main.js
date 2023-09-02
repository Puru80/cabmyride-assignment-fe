import Map from './components/Gmap.vue';

const app = Vue.createApp({
    data() {
        return {
            key: 'AIzaSyDiqmN8zt_5hTBV0NM-xoPpJl1F-y322_4',
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_blue.jpg',
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})

// app.component('gmap', template: 'Map');
