<template>
    <div class="content">
        <header class="header">
            <div class="header__content">
                <Logo />
                <Nav />
                <Search />
            </div>
        </header>
        <main class="main">
            <header>
                <h1 class="main__title">Картины эпохи Возрождения</h1>
            </header>
            <ul class="cards">
                <Card v-for="card in cards" :card="card" :key="card.id" @click="setInCart" />
            </ul>
        </main>
        <footer class="footer">
            <div class="footer__content">
                <Logo />
                <Nav />
                <Address />
            </div>
        </footer>
    </div>
</template>

<script>
import Address from '../Address/Address.vue';
import Logo from '../Logo/Logo.vue';
import Nav from '../Nav/Nav.vue';
import Search from '../Search/Search.vue';
import Card from '../Card/Card.vue';

export default {
    props: {
        card: Object,
    },
    components: {
        Address,
        Card,
        Logo,
        Nav,
        Search,
    },
    data() {
        return {
            cards: [
                {
                    id: 0,
                    image: 'TheBirthofVenus.jpg',
                    name: 'Рождение Венеры',
                    author: 'Сандро Боттичелли',
                    price: 1000000,
                    oldPrice: 2000000,
                    currency: '$',
                    isSold: false,
                    isInCart: false,
                },
                {
                    id: 1,
                    image: 'TheLastSupper.jpg',
                    name: 'Тайная вечеря',
                    author: 'Леонардо да Винчи',
                    price: 3000000,
                    oldPrice: null,
                    currency: '$',
                    isSold: false,
                    isInCart: false,
                },
                {
                    id: 2,
                    image: 'TheCreationOfAdam.jpg',
                    name: 'Сотворение Адама',
                    author: 'Микеланджело',
                    price: 5000000,
                    oldPrice: 6000000,
                    currency: '$',
                    isSold: false,
                    isInCart: true,
                },
                {
                    id: 3,
                    image: 'TheAnatomyLesson.jpg',
                    name: 'Урок анатомии',
                    author: 'Рембрандт',
                    price: null,
                    oldPrice: null,
                    currency: null,
                    isSold: true,
                    isInCart: null,
                },
            ],
        };
    },
    methods: {
        setInCart(id) {
            const card = this.cards.filter((card) => card.id === id)[0];
            card.isInCart = !card.isInCart;
            localStorage.cards = JSON.stringify(this.cards);
        },
    },
    created() {
        if (localStorage.cards) {
            this.cards = JSON.parse(localStorage.cards);
        }
    },
};
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
