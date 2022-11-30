<template>
    <ul class="custom-link-list">
        <li v-for="value in values">
            <custom-link href="value.url">{{value.name}}</custom-link>
        </li>

    </ul>
</template>

<script>
    export default {
        name: "custom-link-list",
        props: {
            values: Array,
            required: true
        }
        
    }
</script>

<style lang="scss" scoped>
.custom-link-list{
    a{
        text-decoration: none;
        display: block;
        width: 100%;
        height: 100%;
    }
    
}

</style>