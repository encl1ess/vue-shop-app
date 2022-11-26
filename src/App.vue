<template>
    <div class='app'>
        <item-card :items='items'/>
    </div>

</template>

<script>
import ItemCard from './components/ItemCard.vue';
export default {
    components: {
        ItemCard
    },
    data() {
        return {
            items: [
                {
                    id:1, 
                    title: 'Пижама для девочек',
                    vendor: '02765/46',
                    price: 800, 
                    sale: 30, 
                    stock: 20,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    imgUrls: []
                },
                {
                    id:2, 
                    title: 'Пижама для мальчиков',
                    vendor: '02765/47',
                    price: 800, 
                    sale: 30, 
                    stock: 20,
                    description: 'Tristique et egestas quis ipsum. Nisi scelerisque eu ultrices vitae auctor eu augue. Nulla pharetra diam sit amet nisl suscipit. Dictumst vestibulum rhoncus est pellentesque elit. Maecenas ultricies mi eget mauris. Tempor commodo ullamcorper a lacus vestibulum. Elementum pulvinar etiam non quam lacus suspendisse. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Mi eget mauris pharetra et ultrices neque ornare. Et malesuada fames ac turpis. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque.',
                }
            ],
            cartItems: []
        }
    }

    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans';
}

.app {
    max-width: 1390px;
}
</style>