<template>
    <div class="card-img" >
 
        <column-container>
            <img class="mini" v-for="image in images" :src="getImgURL(image)" :alt="image" @click="setSelected" />
        </column-container>
        <img class="max-img" :src="(getImgURL(selectedImage || images[0]))" :alt="selectedImage" />
    </div>
</template>

<script>
import getURLMixin from "@/mixins/getURLMixin"
export default {
    name: "images-slider",
    mixins: [getURLMixin],
    props: {  
        images: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            selectedImage: ""
        }
    },
    methods: {
        setSelected(event) {
            this.selectedImage = event.target.alt;         
        }
    },
    computed: {
        // setSrc() {
        //     if (!this.selectedImage) {
        //         return 
        //     }
        //     return getImgURL(this.selectedImage);
        // }
    }
}
</script>

<style lang="scss" scoped>
.card-img {
    
    max-width: 686px;
    width: 50vw;
    height: auto;
    max-height: 880px;
    position: relative;
    overflow: hidden;
    object-fit: fill;

    .max-img {
        max-width: 686px;
        width: 100%;
        height: auto;
    }

    .column-container {
        position: absolute;
        top: 1.5em;
        left: 1em;
        height: inherit;
        overflow-y: auto;

        &::-webkit-scrollbar {
            display: none;
        }

        .mini {
            margin-bottom: 0.6em;
            width: 70px;
            height: 90px;
            object-fit: cover;

            &:hover {
                transform: scale(1.1);
            }
        }
    }
}

@media only all and (max-width: 1400px) {

    .card-img {

        // width: 400px;
        .column-container .mini {
            width: 60px;
            height: 72px;
        }
    }



}

@media only all and (max-width: 685px) {

    .card-img {
        width: 375px;
        margin: 0;

        .column-container .mini {
            width: 40px;
            height: 52px;
        }
    }

}
</style>