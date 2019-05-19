<template>
  <div class="home">
      <!-- On récupere le component et on affiche son contenu à l'aide d'une bloucle for -->
    <homeComponent v-for="tab in tableau" v-bind:type="tab.type" v-bind:nombre="tab.nombre"/>
  </div>
</template>

<script>
    //On import le component pour afficher le nombre clients/salariés/projets ainsi que services pour compter le nombre clients/salariés/projets
    import homeComponent from '@/components/homeComponent.vue'
    import ClientsService from '@/services/ClientsService.vue'
    import ProjectsService from '@/services/ProjectsService.vue'
    import SalariesService from '@/services/SalariesService.vue'

    export default {
        name: 'home',
        components:{
          homeComponent
        },
        data () {
            return {
                tableau: [
                    {type: 'clients', nombre: 0},
                    {type: 'projects', nombre: 0},
                    {type: 'salariés', nombre: 0}
                ]
            }
        },
        created() {
            //à partir de la fonction getClient qui retourne tous les clients actuels
            ClientsService.getClients()
                .then((data) => {
                    //on prend le nombre (length) de client et on le met dans un tableau
                    this.tableau[0].nombre = data.length;
                })
                .catch(error => {console.log(error)});
            ProjectsService.getProjects()
                .then((data) => {
                    this.tableau[1].nombre = data.length;
                })
                .catch(error => {console.log(error)});
            SalariesService.getSalaries()
                .then((data) => {
                    this.tableau[2].nombre = data.length;
                })
                .catch(error => {console.log(error)});
        }
    }
</script>
