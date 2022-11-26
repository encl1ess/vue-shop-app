<template>
    <div class='item' v-for='item in items'>
        <div>{{item.price}}</div>
        <div>{{item.title}}</div>
        <plate class='plate'>
            Скидка {{item.sale}}%
        </plate>
    </div>
</template>

<script>
import Plate from '@/components/UI/Plate.vue'
    export default {
        components: {
            Plate
        },
        props: {
            items: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang='scss' scoped>

</style>