<template>
    <main class="main">
        <h2 class="main__h2">PLANETS</h2>

        <input type="text" v-model="search" placeholder="Buscar...">

        <section class="main__section">
            <article class="main__section-article" v-for="(planet, index) in planets" :key="index">
                <h2>{{ planet.name }}</h2>

                <div class="buttons-container">
                    <button class="btn btn-success" @click="showDetails = true">View More</button>
                    <button class="btn btn-delete" @click="showDetails = false">Hide details</button>
                </div>

                <div class="details-container" v-if="showDetails">
                    <h4>Gravity: {{ planet.gravity }}</h4> <br>
                    <h4>Population: {{ planet.population }} </h4> <br> 
                    <h4>Orbital: {{ planet.orbital_period }}</h4> <br>
                    <h4>Terrain: {{ planet.terrain }}</h4>
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
            search: ''
        }
    },

    created() {
        this.getPlanets();
    },

    computed: {
        filterPlanets() {
            return this.planets.filter( planet => {
                return planet.name.match(this.search);
            })
        }
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

<style lang="scss" scoped>

   .main {
        width: 100%;
        height: 200vh;
        background-image: url(../assets/img/stars.jpg);
        background-size: cover;

        .main__h2 {
            width: 100%;
            text-align: center;
            padding: 50px;
            font-size: 3rem;
            color: var(--primary-color);
        }

        .main__section {
            width: 80%;
            margin: auto;
            display: grid;
            grid-template-columns: repeat( 2, 1fr);
            grid-gap: 10px;

            .main__section-article {
                width: 100%;
                height: 35vh;
                align-self: center;
                padding: 15px;
                background-color: rgb(236, 236, 236);
                border-radius: 15px;
            }

            .main__section-article h2 {
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

            .details-container h4 {
                    font-size: smaller;
            }

            .details-container h4:hover {
                color: var(--secondary-color);
                font-size: large;
                transition: 1s;
            }
        }

        @media(max-width: 800px) {
            .main__section {
                display: flex;
                flex-direction: column;

                .main__section-article {
                    height: 25vh;
                }
            }
        }
    }

</style>