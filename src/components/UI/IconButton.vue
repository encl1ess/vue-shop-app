<template>
    <button class="icon-button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "icon-button"

}
</script>

<style lang="scss" scoped>
.icon-button {
    width: 24px;
    height: 24px;
    mask-position: center;
    mask-repeat: no-repeat;
    background-color: black;
    border: none;


    &:hover {
        background-color: orange;
        mask-size: cover;
        cursor: pointer;
    }
}
</style>