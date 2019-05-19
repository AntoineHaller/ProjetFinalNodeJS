<template>
    <div id="header">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/Projets">Projets</router-link> |
            <router-link to="/Salaries">Salariés</router-link> |
            <router-link to="/Clients">Clients</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style>
    body{
        padding: 0;
        margin: 0;
    }

    #header {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        background-color: #34495e;
        color: white;
        width: 100%;
        height: auto;
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
