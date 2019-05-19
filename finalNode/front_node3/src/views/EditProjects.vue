<template>
    <div class="CreationProjets">
        <h1>L'édition du projet</h1>
        <form action="" method="post">
            <div class="form-group">
                Nom: <input type="text" v-model="name"></div>
            <br>
            <div class="form-group">
                Description: <input type="text" v-model="desc"></div>
            <br>
            <div class="form-group">
                Start date:<input type="text" v-model="startDate"></div>
            <br>
            <div class="form-group">
                End date:<input type="text" v-model="endDate"></div>
            <br>
            <div class="form-group">
                price:<input type="number" v-model="price"></div>
            <br>
            <div class="form-group">
                Status: <input type="text" v-model="status"></div>
            <br>
            <button type="button" name="button" v-on:click="formData(name, desc, startDate,endDate, price, status)">Créer un projet</button>

        </form>
    </div>
</template>

<script>

    import ProjectsService from '../services/ProjectsService.vue'

    export default {
        data () {
            return {
                name: '',
                desc: '',
                startDate: '',
                endDate: '',
                price: '',
                status: '',
                isVisible: false
            }
        },
        created () {
            let paramsId = this.$route.params.id;
            ProjectsService.getProduct(paramsId)
        },
        methods: {
            formData: function (name, desc, startDate,endDate, price, status) {
                ProjectsService.editProject(name, desc, startDate, endDate, price, status)
            }
        }
    }
</script>