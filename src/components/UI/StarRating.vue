<template>
    <row-container class="star-rating">
        <img v-for="index in starAmount" :key="index" src="@/assets/icons/star.svg"/>
        <row-container class="star-rating filled" :style="starRatingWidth">
            <img v-for="index in starAmount" :key="index" src="@/assets/icons/filled-star.svg" />
        </row-container>
    </row-container>
</template>

<script>
export default {
    name: "star-rating",
    props: {
        rating: {
            type: Number,
            default: 3
        },
        starAmount: {
            type: Number,
            default: 5
        }
    },
    computed: {
        calcWidth() {
            return (100 / this.starAmount) * this.rating;
        },
        starRatingWidth() {
            return `width: ${this.calcWidth}%;`
        }
    }

}
</script>

<style lang="scss" scoped>
.star-rating {
    position: relative;
    margin: 0;
    img {
        margin: 0.1em;
    }
    .filled {
        position: absolute;
        width: 0;
        overflow: hidden;
    }
}
</style>