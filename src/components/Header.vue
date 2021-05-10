<template>
    <header class="header">
        <h1 class="header__title"> OUR UNIVERSE</h1>
    </header>
</template>

<script>
export default {
    name: 'Header',

}
</script>

<style lang="scss" scoped>
    
    .header {
        width: 100%;
        text-align: center;
        padding: 50px;

        .header__title {
            color: var(--primary-color);
            font-size: 3rem;
        }

        @media(max-width: 700px) {
            .header__title {
                font-size: 2rem;
            }
        }
    }

</style>>
