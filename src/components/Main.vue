<template>
    <main class="main">
        <section class="main__section">
            <article class="main__section-article">
                <figure>
                    <router-link to="/people">
                        <img src="../assets/img/people.jpg" alt="">
                        <figcaption>PEOPLE</figcaption>
                    </router-link>
                </figure>
            </article>

            <article class="main__section-article">
                <figure>
                    <router-link to="/planets">
                        <img src="../assets/img/starship.jpg" alt="">
                        <figcaption>STARSHIPS</figcaption>
                    </router-link>
                </figure>
            </article>

            <article class="main__section-article">
                <figure>
                    <router-link to="starships">
                        <img src="../assets/img/planets.jpg" alt="">
                        <figcaption>PLANETS</figcaption>
                    </router-link>
                </figure>
            </article>
        </section>
    </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

    .main {
        width: 100%;
        height: 60vh;

        .main__section {
            width: 80%;
            height: 60vh;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            overflow: hidden;

            .main__section-article {
                flex-basis: 25%;
                display: flex;
            }

            .main__section-article figure router-link {
                width: inherit;
                height: 25vh;
            }

            .main__section-article figure img {
                height: 100px;
                width: 200px;
                border-radius: 15px;
                background-size: cover;
            }

            .main__section-article figure figcaption {
                text-align: center;
                color: var(--primary-color);
            }
        }

        @media(max-width: 800px) {

            .main {
                height: 70vh;
            }

            .main__section {
                flex-direction: column;
                height: 70vh;
            }
        }
    }

</style>

