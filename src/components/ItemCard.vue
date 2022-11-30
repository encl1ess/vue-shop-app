<template>
    <article class='card'>
        <div class="card-img">
            <img class="max-img" src="@/assets/items/item1_1.png" />
            <column-container>
                <img class="mini" src="@/assets/items/item1_1.png" />
                <img class="mini" src="@/assets/items/item1_2.png" />
                <img class="mini" src="@/assets/items/item1_3.png" />
                <img class="mini" src="@/assets/items/item1_4.png" />
                <img class="mini" src="@/assets/items/item1_5.png" />
            </column-container>

        </div>
        <column-container class="card-body">
            <column-container class="card-header">
                <h3 class="card-title">{{ item.title }}</h3>
                <div class="card-vendor">Арт. {{ item.vendor }}</div>
                <div class="reviews">
                    <label>Отзывы</label>
                    <star-rating :rating="4" />
                    <div>14 отзывов </div>
                    <icon-button class="arrow-icon" />
                </div>
            </column-container>
            <column-container class="card-content">
                <column-container class="price-info">
                    <row-container class="price-container">
                        <div class="price">{{ item.price }}<span class="rub">Р</span></div>
                        <div class="old-price">{{ item.oldPrice }}<span class="rub">Р</span> </div>
                        <icon-button class="arrow-icon" />
                    </row-container>
                    <row-container class="sale-container">
                        <custom-button class="plate">
                            скидка -{{ item.sale }}%
                        </custom-button>
                        <custom-button class="plate">
                            акция -{{ item.stock }}%
                        </custom-button>
                    </row-container>
                </column-container>
                <column-container class="size-info">
                    <custom-select :options="sizes" />
                    <custom-link>Определить размер</custom-link>
                </column-container>
                <column-container class="buy-info">
                    <row-container class="buttons-wrapper">
                        <number-input />
                        <custom-button class="add-to-cart dark" @click="addToCart">Добавить в корзину</custom-button>
                        <custom-button class="dark large-square heart-icon"></custom-button>
                    </row-container>
                    <custom-link> Купить в 1 клик</custom-link>
                </column-container>
                <hr>
                <column-container class="card-footer">
                    <ul>
                        <li class="description">
                            <icon-button class="description-icon" />
                            <custom-link>Описание товара</custom-link>
                        </li>
                        <li class="delivery">
                            <icon-button class="clock-icon" />
                            <custom-link>Доставка и возврат</custom-link>
                        </li>
                        <li class="payment">
                            <icon-button class="card-icon" />
                            <custom-link>Способы оплаты</custom-link>
                        </li>
                    </ul>
                </column-container>

            </column-container>
        </column-container>
    </article>

</template>

<script>

export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            sizes: ['Выберите размер', 80, 86, 92, 98, 104, 110, 116, 122],
            itemQuantity: 0
        }

    }
}
</script>

<style lang='scss' scoped>
hr {
    border-top: 0.5px solid #C4C4C4;
}

.reviews {
    margin-top: 0.5em;
    display: flex;
    align-items: center;

    label {
        margin-right: 1em;
    }

    .star-rating {
        margin: 0.1em;
    }
}

.arrow-icon {
    mask-image: url("@/assets/icons/arrow.svg");
}

.description-icon {
    mask-image: url("@/assets/icons/description.svg");

}

.clock-icon {
    mask-image: url("@/assets/icons/clock.svg");

}

.card-icon {
    mask-image: url("@/assets/icons/card.svg");

}

.heart-icon {
    background: center no-repeat url("@/assets/icons/heart.svg");

    &:hover {
        background: center no-repeat url("@/assets/icons/filled-heart.svg");
        background-color: #333333;
    }
}

.card {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    .card-body {
        width: 50%;

        &>.column-container {
            margin: 1em 0.5em 1em 2em; //t r b l

        }

        .card-content .column-container {
            margin-bottom: 1em;
        }
    }

    .buttons-wrapper {
        flex-wrap: wrap;

        * {
            margin-top: 1em;
        }
    }

    &-title {
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
    }

    &-vendor {
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.04em;
        color: #828282;
    }

    .card-footer {
        li {
            display: flex;
            align-items: center;
            margin-bottom: 0.5em;
        }
    }

}


.card-img {
    width: 50%;
    height: auto;
    max-height: 880px;
    // object-fit: fill;
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        height: auto;
    }

    .column-container {
        position: absolute;
        top: 1.5em;
        left: 1em;
        height: inherit;
        overflow-y: auto;

        &::-webkit-scrollbar {
            display: none;
        }

        .mini {
            margin-bottom: 0.6em;
            width: 70px;
            height: 90px;
            object-fit: cover;

            &:hover {
                transform: scale(1.1);
            }
        }
    }

    @media only all and (max-width: 1400px) {
        width: 375px;
        margin: 0;

        .column-container .mini {
            width: 40px;
            height: 52px;
        }
    }

}


.price-container {
    letter-spacing: 0.04em;
    .rub {
        position: relative;
    }
    .price,
    .price .rub {
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;

    }

    .rub:before,
    .rub:after {
        content: "";
        top: 52%;
        position: absolute;
        width: 0.4em;
        border-top: 0.15em solid #333333;
    }

    .rub:after {
        top: 65%;
        right: 40%;
        // width: 0.4em;
        border-width: 0.1em;

    }

    .old-price,
    .old-price .rub {
        font-weight: 400;
        color: #828282;
        text-decoration: line-through;
    }

    .old-price {

        .rub:before,
        .rub:after {
            border-color: #828282;
        }
    }
}


@media only all and (max-width: 685px) {
    .card {
        flex-wrap: wrap;

        .card-body {
            width: 100%;
        }
    }
}
</style>