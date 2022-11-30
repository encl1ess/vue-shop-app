<template>
    <form class="subscribe-form" @submit.prevent>
        <label for="email">Узнайте первыми о новинках и акциях</label>
        <row-container class="input-wrapper">
            <input v-model="email" name="email" placeholder="Адрес электронной почты"/><icon-button class="cross-icon"/>
        </row-container>
       <custom-button type="submit">Подписаться</custom-button>
    </form>
</template>

<script>
    export default {
        name: "subscribe-form"
        
    }
</script>

<style lang="scss" scoped>
.subscribe-form {
    width: 450px;

    display: flex;
    flex-direction: column;
    
    label {
        text-transform: uppercase;
        font-size: 16px;
        line-height: 24px;
    }

    button {
        align-self: flex-end;
    }
    .input-wrapper {
        // width: 450px;
        width: 100%;
        height: 44px;
        border-bottom: 0.1em solid #C4C4C4;
        margin: 2em 0;
        align-items: center;
        justify-content: center;

        input {
            padding-left: 1em;
            height: 100%;
            width: 100%;
            &:focus {
                outline-color: transparent;     
                border-bottom: 1px solid orange;
            }
        }
        
    }
    .cross-icon {
        align-self: center;
        margin-right: 0.5em;
        background-color: #C4C4C4;
        mask-image:url("@/assets/icons/cross.svg");
        &:hover {
            mask-size:auto;
        }
    }

    @media only all and (max-width: 685px) {
        label {
            margin-right: 1em;
            word-wrap: normal;
        }
    }
}

</style>