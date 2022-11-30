<template>
    <button class="custom-button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'custom-button'
}
</script>

<style lang="scss" scoped>
.custom-button {
    flex-shrink: 0;
    outline: 0.1em solid #333333;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    padding: 0.7em 2.5em;
   
    height: inherit;
    &:hover {
        // background-color: ;
        cursor: pointer;
        outline-color: orange;
        outline-width: 0.2em;
    }
}
.plate {
    font-size: 12px;
    padding: 0.1em 0.9em;
}

.dark {
    height: 44px;
    color: white;
    background-color: #333333;
}

.large-square {
    width: 44px;
    height: 44px;
    padding: 0;
}
</style>