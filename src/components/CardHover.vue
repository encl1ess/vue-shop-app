<template>
    <column-container class="card-hover">
        <icon-button class="stack-icon" />
        <column-container>
            <icon-button class="cart-icon" />
            <p>Узнай, что на мне</p>
        </column-container>
        <row-container>
            <icon-button class="filled-heart-icon" /> <span>200</span>
        </row-container>
    </column-container>
</template>

<script>
export default {
    name: "card-hover"
}
</script>

<style lang="scss" scoped>
.card-hover {
    background: #333333;
    opacity: 0.7;
    width: inherit;
    height: inherit;
    position: absolute;
    display: none;
    align-items: center;
    justify-content: space-between;

    .column-container {
        align-items: center;
        justify-content: space-between;
    }

    p,
    span {
        color: white;
    }

    p {
        margin-top: 0.1em;
    }

    .icon-button {
        background-color: white;

        &.cart-icon {
            width: 32px;
            height: 32px;
            mask-size: cover;
        }

    }

    .stack-icon {
        mask-image: url("@/assets/icons/stack.svg");
        align-self: flex-end;
        margin: 1em;
    }

    .cart-icon {
        mask-image: url("@/assets/icons/cart.svg");

    }

    .filled-heart-icon {
        margin-right: 0.5rem;
        mask-image: url("@/assets/icons/filled-heart.svg");
    }

}

.large-wrapper {
    p,
    span {
        font-size: 24px;
    }
    p {
        margin-top: 0.5em;
    }

    .icon-button {
        width: 24px;
        height: 24px;
        mask-size: cover;

    &.cart-icon {
            width: 48px;
            height: 48px;
        }

    }
    .row-container {
        padding-bottom: 1.5em;
    }

}
</style>