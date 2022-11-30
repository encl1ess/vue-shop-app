<template>
    <footer>

            <column-container>
                <span class="link-list-title">покупателям</span>
                <custom-link-list :values="toCustomers" />
            </column-container>

            <column-container>
                <span class="link-list-title">о нас</span>
                <custom-link-list :values="aboutUs" />
            </column-container>
            <subscribe-form/>
     
  
    
       


    </footer>
</template>

<script>
import SubscribeForm from "@/components/SubscribeForm.vue"


export default {
    name: "custom-footer",
    components: {
        SubscribeForm
    },
    props: {
        values: Array
    },
    data() {
        return {
            toCustomers: [
                {
                    url: "/catalog",
                    name: "Каталог"
                },
                {
                    url: "/sales",
                    name: "Акции"

                },
                {
                    url: "/brands",
                    name: "Бренды"
                }
            ],
            aboutUs: [
                {
                    url: "/about",
                    name: "О компании"
                },
                {
                    url: "/news",
                    name: "Новости"

                },
                {
                    url: "/team",
                    name: "Команда"
                }
            ],

        }
    }

}
</script>

<style lang="scss" scoped>
footer {
    margin: 3em 0;
    max-width: 1390px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;

    @media only all and (max-width: 1400px) {
        height: 355px;
    }
    @media only all and (max-width: 685px) {
        min-width: 350px;
        width: 90%;
        .column-container {
            min-width: max-content;
            width: 40%;
        }
    }


}

.link-list-title {
    text-transform: uppercase;
    font-size: 16px;
    line-height: 24px;
}
</style>