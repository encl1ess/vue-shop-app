<template>
    <a class="custom-link" @click.prevent>
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: "custom-link"
    }
</script>

<style lang="scss" scoped>
    .custom-link {
        text-decoration: underline;
        &:hover {
            color: orange;
            cursor: pointer;
        }
    }

</style>