export default {
    methods: {
        getImgURL(url) {
            return require("@/assets/items/" + url)
        }
    }
}