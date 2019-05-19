<template lang="html">
    <div class="project-detail">

                <h2>Nom :{{project.name}}</h2>
                <h2>Description :{{project.desc}}</h2>
                <h2>Date de début :{{project.startDate}}</h2>
                <h2>Date de fin :{{project.endDate}}</h2>
                <h2>Prix :{{project.price}}</h2>
                <h2>Statut :{{project.status}}</h2>
        <a v-bind:href="'/Projets-edit/' + project._id">Modifier</a>
        <button type="button" name="button" v-on:click="del(project._id)"> Supprimer</button>

    </div>
</template>

<script>
    import ProjectsService from "@/services/ProjectsService.vue";

    export default {

        data () {
            return{
                project : {},
            }
        },

        created() {
            let paramsId = this.$route.params.id;
            ProjectsService.getProject(paramsId)
                .then((data) => {
                    this.project = data;
                })
                .catch(error => {console.log(error)});
        },
        methods: {
            del:function (id) {
                ProjectsService.deleteProject(id);
                this.$router.push('/Projets');
            }
        }
    }
</script>