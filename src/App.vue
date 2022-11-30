<template>
    <div class="app">
        <transition name="hide">
            <navbar v-if="hide" />
        </transition>

        <column-container class='content'>
            <item-card :item="items[0]" />
            <images-container :images="images" />
        </column-container>
        <custom-footer />
    </div>


</template>

<script>
import ItemCard from './components/ItemCard.vue';
import Navbar from './components/Navbar.vue';
import CustomFooter from './components/CustomFooter.vue';
import ImagesContainer from './components/ImagesContainer.vue';
export default {
    components: {
        ItemCard,
        Navbar,
        ImagesContainer,
        CustomFooter
    },
    data() {
        return {
            hide: {
                type: Boolean,
                default: false
            },
            items: [
                {
                    id: 1,
                    title: 'Пижама для девочек',
                    vendor: '02765/46',
                    price: 800,
                    oldPrice: 1500,
                    sale: 30,
                    stock: 20,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    imgURLs: [
                        "item1_1.png",
                        "item1_2.png",
                        "item1_3.png",
                        "item1_4.png",
                        "item1_5.png"
                    ]
                },
                {
                    id: 2,
                    title: 'Пижама для мальчиков',
                    vendor: '02765/47',
                    price: 800,
                    oldPrice: 1600,
                    sale: 30,
                    stock: 20,
                    description: 'Tristique et egestas quis ipsum. Nisi scelerisque eu ultrices vitae auctor eu augue. Nulla pharetra diam sit amet nisl suscipit. Dictumst vestibulum rhoncus est pellentesque elit. Maecenas ultricies mi eget mauris. Tempor commodo ullamcorper a lacus vestibulum. Elementum pulvinar etiam non quam lacus suspendisse. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Mi eget mauris pharetra et ultrices neque ornare. Et malesuada fames ac turpis. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque.',
                    imgURLs: [
                        "item1_1.png",
                        "item1_2.png",
                        "item1_3.png",
                        "item1_4.png",
                        "item1_5.png"
                    ]
                }
            ],
            images: [
                "item2_1.png",
                "item3_1.png",
                'item4_1.png',
                "item5_1.png",
                "item6_1.png"
            ]
        }
    }




}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');

* {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans';
    font-size: 14px;
    line-height: 20px;
    border: none;
    color: #333333;
    background: transparent;
}

ul {
    list-style: none;
}

#app,
.app {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content {
    margin-top: 4.5em;
    max-width: 1390px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>