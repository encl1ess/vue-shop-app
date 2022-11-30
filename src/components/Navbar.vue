<template>
        <header class="navbar">

            <nav>
                <a class="logo"></a>
                <row-container>
                    <ul class="menu">
                        <li>
                            <a href="#profile">
                                <icon-button class="profile-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="#favourites">
                                <icon-button class="favourites-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="#cart">
                                <icon-button class="cart-icon" />
                            </a>
                        </li>
                    </ul>
                    <transition name="fade">
                        <icon-button v-if="show" @click="show = !show" key="toggle-menu-btn"
                            class="menu-icon toggle-menu-btn" />
                        <icon-button v-else @click="show = !show" class="cross-icon" key="close" />
                    </transition>
                    <transition name="fade">
                        <row-container v-if="!show" class="menu-container">
                            <custom-link-list class="toggle-menu" :values="menuItems" />
                        </row-container>

                    </transition>


                </row-container>
            </nav>
        </header>

</template>

<script>

export default {
    name: 'navbar',
    data() {
        return {
            show: {
                type: Boolean,
                default: false
            }
            ,
            menuItems: [
                {
                    url: "/bedclothes",
                    name: "постельное белье"
                },
                {
                    url: "/homewear",
                    name: "одежда для дома"

                },
                {
                    url: "/outdoor",
                    name: "одежда для улицы"
                },
                {
                    url: "/exit",
                    name: "выход"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.hide-enter-active, .hide-leave-active {
  transition: opacity .5s;
}
.hide-enter, .hide-leave-to {
  opacity: 0;
}
.navbar {
    z-index: 100;
    position: fixed;
    background: white;
    height: 44px;
    width: 100vw;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    transition: top 0.5s;
    margin-bottom: 2em;

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
        width: 90%;
        height: inherit;

        .row-container {
            margin: 0;
            align-items: center;
            justify-content: center;
            padding: 0;
        }




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

        .menu-icon {
            mask-image: url("@/assets/icons/menu.svg");
        }

        .cross-icon {
            mask-image: url("@/assets/icons/cross.svg");
            z-index: 2;
        }

        .toggle-menu-btn {
            display: none;

        }

        .menu-container {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            z-index: 1;
            height: 277px;
            min-width: max-content;
            background-color: white;
            align-items: flex-end;

            .toggle-menu {
                display: flex;
                flex-direction: column;
                width: 80%;
                height: 50%;
                margin: 3.5em 2em;
                justify-self: end;
                justify-content: space-between;
                text-transform: uppercase;
            }
        }

    }
}


@media only all and (max-width: 1400px) {
    nav {
        width: 90%;

    }
}

@media only all and (max-width: 685px) {


    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .navbar {
        height: 68px;
        box-shadow: none;
        margin: 0;

        nav {
            .toggle-menu-btn {
                display: flex;
            }
        }
    }

}
</style>