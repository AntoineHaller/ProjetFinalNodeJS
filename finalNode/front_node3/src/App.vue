<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/layout/Header.vue'
    import Footer from '@/layout/Footer.vue'

    export default {
        name: 'home',
        components: {
            Header,
            Footer
        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #ecf0f1;
  }
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: white;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
