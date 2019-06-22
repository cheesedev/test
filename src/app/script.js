export default {
    name: 'app',
    components: {
    },
    data() {
        return {
            message: 'uwu',
        }
    },
    created() {
        this.message = "aaa";
    },
    methods: {
        changeMess: function () {
            this.message = "benis";
        }
    }
}