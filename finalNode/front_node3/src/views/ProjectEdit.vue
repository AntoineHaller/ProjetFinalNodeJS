<template>

    <div class="ProjectEdit">
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
            <button type="button" name="button" v-on:click="edit(id,name, desc, startDate, endDate, price, status)"> Modifier</button>
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
                status: "",
                id: this.$route.params.id
            }
        },
        created() {
            ProjectsService.getProject(this.id)
                .then((data) => {
                    this.name = data.name;
                    this.desc = data.desc;
                    this.startDate = data.startDate;
                    this.endDate = data.endDate;
                    this.price = data.price;
                    this.status = data.status;
                })
                .catch(error => {console.log(error)});
        },
        methods: {
            edit: function (id, name, desc, startDate, endDate, price, status) {
                ProjectsService.editProject(id, name, desc, startDate, endDate, price, status);
                this.$router.push('/Projets');
            }
        }
    }
</script>