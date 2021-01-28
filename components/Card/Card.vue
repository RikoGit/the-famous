<template>
    <li class="card" :class="{ card_type_sold: card.isSold, card_type_incart: card.isInCart }">
        <div class="card__photo">
            <img
                class="card__img"
                :src="`images/${card.image}`"
                :alt="`${card.name} ${card.author}`"
            />
        </div>
        <div class="card__info">
            <div class="card__name">«{{ card.name }}»</div>
            <div class="card__author">{{ card.author }}</div>
            <div v-if="card.isSold" class="card__solidtext">Продана на аукционе</div>
            <div v-else class="card__bottom">
                <div class="card__price">
                    <div v-if="card.oldPrice" class="card__oldprice">
                        {{ card.oldPrice }} {{ card.currency }}
                    </div>
                    <div class="card__validprice">{{ card.price }} {{ card.currency }}</div>
                </div>
                <button
                    type="button"
                    class="card__button"
                    :class="{ card__button_type_incart: card.isInCart }"
                    :title="card.isInCart ? 'Удалить из корзины' : 'Добавить в корзину'"
                    @click="$emit('click', card.id)"
                >
                    {{ card.isInCart ? 'В корзине' : 'Купить' }}
                </button>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: { card: Object },
};
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
