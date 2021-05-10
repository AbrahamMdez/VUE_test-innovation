<template>
    <main class="main">
        <h2 class="main__h2">Planets</h2>

        <section class="main__section">
            <article class="main__section-article" v-for="(planet, index) in planets" :key="index">
                <p>{{ planet.name }}</p>

                <div class="buttons-container">
                    <button class="btn btn-success" @click="showDetails = true">View More</button>
                    <button class="btn btn-delete" @click="showDetails = false">Hide details</button>
                </div>

                <div class="details-container" v-if="showDetails">
                    Gravity: {{ planet.gravity }} <br>
                    Population: {{ planet.population }} <br>
                    Orbital: {{ planet.orbital_period }} <br>
                    Terrain: {{ planet.terrain }}
                </div>
            </article>
        </section>
    </main>
</template>

<script>
export default {
    name: 'Planets',

    data() {
        return {
            planets: [],
            showDetails: false,
        }
    },

    created() {
        this.getPlanets();
    },

    methods: {
        getPlanets() {
            this.axios.get('https://swapi.dev/api/planets')
            .then( res => {
                console.log(res)
                this.planets = res.data.results;
            })

            .catch( e => {
                return e.response;
            })
        }
    }

}
</script>

<style lang="scss">

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