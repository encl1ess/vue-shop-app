<template>
    <form class="subscribe-form" @submit.prevent="checkForm" novalidate="true">
        <label for="email">Узнайте первыми о новинках и акциях</label>
        <row-container class="input-wrapper">
            <input v-model="email" name="email" type="email" placeholder="Адрес электронной почты"/><icon-button @click="clearInput" class="cross-icon"/>
        </row-container>
       <custom-button type="submit">Подписаться</custom-button>
       <div v-if="errorMessage" class="error-message">{{errorMessage}}</div>
    </form>
</template>

<script>
    export default {
        name: "subscribe-form",
        data() {
            return {
                errorMessage: "",
                email: ""
            }
        }, 
        methods: {
            clearInput() {
                this.email="";
                this.errorMessage = "";

            },
            checkForm() {
                if(!this.emailValidation(this.email)) {
                    this.errorMessage = "Некорректный email";
                } else {
                    this.clearInput();
                }
            },
            emailValidation(email) {
                const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
                return regExp.test(email);
            
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.subscribe-form {
    .error-message {
        color: red;
        font-weight: bold;
    }
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