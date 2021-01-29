<template>
    <div class="logo">
        <a href="#"
            ><img
                :src="mode === 'light' ? logoSrcLight : logoSrc"
                alt="THE FAMOUS"
                title="THE FAMOUS"
        /></a>
    </div>
</template>

<script>
import logoSrc from '../../docs/images/logo-museum.svg';
import logoSrcLight from '../../docs/images/logo-museum_light.svg';

export default {
    props: { mode: String },
    data() {
        return {
            logoSrc,
            logoSrcLight,
        };
    },
};
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
