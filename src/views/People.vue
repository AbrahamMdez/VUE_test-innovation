<template>
    <main class="main">
        <h2 class="main__h2">People</h2>

        <section class="main__section">
            <article class="main__section-article" v-for="(person, index) in people" :key="index">
                <p>{{ person.name }}</p>

                <div class="buttons-container">
                    <button class="btn btn-success" @click="showDetails = true">View More</button>
                    <button class="btn btn-delete" @click="showDetails = false">Hide details</button>
                </div>
                
                <div class="details-container" v-if="showDetails">
                    Gender: {{ person.gender }} <br>
                    Skin-color: {{ person.skin_color }} <br>
                    Birthday: {{ person.birth_year }} <br>
                    Height: {{ person.height }}
                </div>
            </article>
        </section>
    </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'People',

    data() {
        return {
            showDetails: false
        }
    },

    computed: {
        ...mapState(['people']),

    },

    created() {
        this.getPeople()
    },

    methods: {
        ...mapActions(['getPeople'])
    },
}
</script>

<style lang="scss" scoped>

    .main {
        width: 100%;
        height: 80vh;

        .main__h2 {
            width: 100%;
            text-align: center;
            padding: 20px;
        }

        .main__section {
            width: 80%;
            margin: auto;
            display: grid;
            grid-template-columns: repeat( 3, 1fr);

            .main__section-article {
                width: 100%;
                height: 35vh;
                align-self: center;
                padding: 15px;
            }

            .main__section-article p {
                padding: 10px;
                text-align: center;
                font-size: larger;
                font-weight: 600;
            }

            .buttons-container {
                display: flex;
                justify-content: space-evenly;
            }

            .details-container {
                text-align: center;
                margin-top: 15px;
            }
        }

        @media(max-width: 800px) {
            .main__section {
                display: flex;
                flex-direction: column;
            }
        }
    }

</style>