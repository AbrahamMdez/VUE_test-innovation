<template>
  <div class="home">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',

  components: {
    Header,
    Main,
    Footer
  },
}
</script>

<style lang="scss" scoped>

  .home {
    width: 100%;
    height: 100vh;
    background-image: url(../assets/img/stars.jpg);
    background-position: center;
    background-size: cover;
  }

</style>