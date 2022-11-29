<template>
    <Transition name="hide">
        <header class="navbar" v-if="show">

            <nav>
                <a class="logo"></a>
                <ul class="menu">
                    <li>
                        <a href="#profile">
                            <icon-button class="profile-icon"></icon-button>
                        </a>
                    </li>
                    <li>
                        <a href="#favourites">
                            <icon-button class="favourites-icon"></icon-button>
                        </a>
                    </li>
                    <li>
                        <a href="#cart">
                            <icon-button class="cart-icon"></icon-button>
                        </a>
                    </li>


                </ul>
            </nav>

        </header>
    </Transition>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {
            show: true,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll() {
            if (window.pageYOffset > 100) {
                
            }

        }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    height: 44px;
    width: 100vw;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    // position: fixed;
    display: flex;
    justify-content: center;
    transition: top 0.5s;
    .logo {
        width: 67px;
        height: 16px;
        background: center no-repeat url("@/assets/icons/logo.svg");
        &:hover {
            background: orange;
            cursor: pointer;
            mask-image: url("@/assets/icons/logo.svg");
            mask-position: center;
            mask-repeat: no-repeat;
            
        }
    }
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1390px;
        width: 100%;
        height: inherit;

        .menu {
            min-width: 120px;
            display: flex;
            justify-content: space-between;

            .profile-icon {
                mask-image: url("@/assets/icons/profile.svg");
            }

            .favourites-icon {
                mask-image: url("@/assets/icons/favourites.svg");
            }

            .cart-icon {
                mask-image: url("@/assets/icons/cart.svg");
            }
        }
    }
}
</style>