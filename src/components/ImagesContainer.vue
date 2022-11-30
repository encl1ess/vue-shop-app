<template>
    <section>
        <column-container>
            <custom-link>Посмотреть все стили</custom-link>
            <row-container class="images-container">
                <column-container class="image-wrapper large-wrapper">
                    <card-hover />
                    <img :src="getImgURL(images[0])" />
                </column-container>
                <row-container class=" images-container small-wrapper">
                    <column-container class=" image-wrapper" v-for="image in images">
                        <card-hover />
                        <img :src="getImgURL(image)" />
                    </column-container>
                </row-container>


            </row-container>
        </column-container>
    </section>

</template>

<script>
import CardHover from "@/components/CardHover.vue"
import getURLMixin from "@/mixins/getURLMixin"
export default {
    name: "images-container",
    mixins: [getURLMixin],
    components: {
        CardHover
    },
    props: {
        images: {
            type: Array,
            required: true
        }
    },
}
</script>


<style lang="scss" scoped>
section {
    width: 100%;
    height: max-content;
}

.custom-link {
    text-align: center;
    margin: 2em;
}

.images-container {
    position: relative;
    margin: 0;
    width: 100%;
    height: 685px;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;

    .image-wrapper {
        margin: 0;
        min-width: 50%;

        &:first-child {
            width: 685px;
            height: inherit;
        }

        &:hover {
            .card-hover {
                display: flex;

            }
        }
    }

    img {

        width: inherit;
        height: inherit;
        object-fit: cover;

    }

    .small-wrapper {
        margin: 0;
        align-items: inherit;

        align-content: space-between;
        flex-wrap: wrap;
        width: 50%;
        height: inherit;
        overflow: hidden;

        .image-wrapper {
            &:first-child {
                display: none;
            }

            width: 50%;
            width: 335px;
            height: 336px;
        }


    }
}

@media only all and (max-width: 1400px) {
    .images-container {
        align-self: center;
        width: 685px;
        height: max-content;
    
        .image-wrapper{
            margin-bottom: 0.5em;
            align-items: center;
            &:first-child {
                height: 685px;
            }
        }
        .small-wrapper {
            width: inherit;
            align-content: space-between;
            img{
                margin:0;
            }
        }
    }

}

@media only all and (max-width: 685px) {
    .images-container {
        align-self: center;
        width: 375px;
        height: max-content;
    
        .image-wrapper{
            margin-bottom: 0.3em;
            align-items: center;
            &:first-child {
                width: inherit;
                height: 375px;
            }
        }
        .small-wrapper {
            width: inherit;
            align-content: space-between;
            .image-wrapper {
                width: 183px;
                height: 183px;
                
            }
            img{

                margin:0;
            }
        }
    }
}
</style>