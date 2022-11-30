<template>
    <div class="column-container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "column-container"
    }
</script>

<style lang="scss" >
.column-container {
    display: flex;
    flex-direction: column;
    & > * {
        margin-bottom: 0.5rem;
    }
}

</style>