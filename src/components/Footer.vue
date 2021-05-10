<template>
    <footer class="footer">
        <h4 class="footer__h4">Made with <i class="far fa-heart"></i> by Abraham Menéndez</h4>
    </footer>
</template>

<script>
export default {
    name: 'Footer',

}
</script>

<style lang="scss" scoped>

    .footer {
        width: 100%;
        position: absolute;
        bottom: 0;
        padding: 20px;
        text-align: center;

        .footer__h4 {
            color: var(--primary-color);
            font-weight: 100;
        }

        @media(max-width: 350px) {
            .footer__h4 {
                font-size: smaller;
            }
        }
    }

</style>