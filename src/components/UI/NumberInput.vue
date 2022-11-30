<template>
    <row-container class="number-input">
        <custom-button @click="plusNumber" class="plus large-square">+</custom-button>
        <input disabled type="number" min="1" max="10" name="quantity" :value="quantity" />
        <custom-button @click="minusNumber" class="minus large-square">–</custom-button>
    </row-container>
</template>

<script>
export default {
    name: "number-input",
    data() {
        return {
            quantity: 1
        }
    },
    methods: {
        plusNumber() {
            this.quantity +=1;
            this.$emit('quantity', this.quantity)
        },
        minusNumber() {
            this.quantity > 1 ? this.quantity -=1 : this.quantity;
            this.$emit('quantity', this.quantity)
        }
    }
}
</script>

<style lang="scss" scoped>
.number-input {
    outline: 0.1em solid #F2F2F2;
    margin: 0;
    margin-right: 1em;
    display: flex;
    background-color: #F2F2F2;
    justify-content: space-between;
    width: 145px;

    align-self: center;
    justify-self: center;

    input {
        width: 100%;
        min-width: max-content;
        height: 44px;
        margin: 0;
        text-align: center;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
    }

    .custom-button {

        .plus {
            align-self: flex-start;

        }

        .minus {
            align-self: flex-end;
        }
    }

    .custom-button {
        margin: 0;
        outline: none;
        &:hover {
            background-color: #C4C4C4;
        }
    }
}
</style>