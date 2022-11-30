<template>
    <div class="row-container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'row-container'
    }
</script>

<style lang="scss" >
.row-container {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    & > * {
        margin-right:1rem;
       
    }
}

</style>