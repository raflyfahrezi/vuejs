var vo = new Vue({
    el: '#app',
    data: {
        nama: 'Farhan',
        umur: 19,
        gender: 'Pria',
        biodata: '',
        a: 1,
        b: 2
    }, 
    computed: {
        c: () => {
            return Number(this.a) + 2;
        }
    }
})