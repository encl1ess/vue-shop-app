<template>
    <select class="custom-select" :options="options">
       <option v-for="(opt,index) in options" :value="index">{{opt}}</option>
    </select>
</template>

<script>
    export default {
        name: "custom-select",
        props: {
            options: {
                type: Array,

            }
        },
        data() {
            return {
                selectedOption: 0
            }
        }
    }
</script>

<style lang="scss" scoped>

.custom-select {
    width: 315px;
    height: 44px;
    border: 1px solid #333333;
    option:first-child {
        display: none;
    }
    option{
        width: inherit;
    }
    padding: 0 1em;
    appearance: none;
    background: no-repeat right 0.7rem top 50% url("@/assets/icons/down-arrow.svg");
}

</style>