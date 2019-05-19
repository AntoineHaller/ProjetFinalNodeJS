<template>
    <div class="newProject">
        <form>
            <div class="form-group">
                NOM <input type="text" v-model="name">
            </div>
            <div class="form-group">
                DESCRIPTION <input type="text" v-model="desc">
            </div>
            <div class="form-group">
                Date de début <input type="text" v-model="startDate">
            </div>
            <div class="form-group">
                Date de fin <input type="text" v-model="endDate">
            </div>
            <div class="form-group">
                Prix <input type="number" v-model="price">
            </div>
            <div class="form-group">
                Statut <input type="text" v-model="status">
            </div>
            <button type="button" name="button" v-on:click="create(name, desc, startDate, endDate, price, status)"> Créer</button>
        </form>
    </div>
</template>

<script>

    import ProjectsService from "@/services/ProjectsService.vue";

    export default{
        data () {
            return{
                name: "",
                desc: "",
                startDate: "",
                endDate: "",
                price: "",
                status: ""
            }
        },
        methods: {
            create: function (name, desc, startDate, endDate, price, status) {
                ProjectsService.createProject(name, desc, startDate, endDate, price, status);
                this.$router.push('/Projets');
            }
        }
    }
</script>