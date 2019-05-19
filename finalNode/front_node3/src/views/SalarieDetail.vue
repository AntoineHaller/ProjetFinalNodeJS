<template lang="html">
    <div class="salarie-detail">

        <h2>Nom :{{salarie.name}}</h2>
        <h2>Prénom :{{salarie.firstname}}</h2>
        <h2>Date de naissance :{{salarie.birthDate}}</h2>
        <h2>Numéro et Rue:{{salarie.adresseRue}}</h2>
        <h2>Ville :{{salarie.adresseVille}}</h2>
        <h2>CP :{{salarie.adresseCP}}</h2>
        <h2>Téléphone :{{salarie.tel}}</h2>
        <h2>Mail :{{salarie.mail}}</h2>
        <h2>Poste :{{salarie.position}}</h2>
        <a v-bind:href="'/Salaries-edit/' + salarie._id">Modifier</a>
        <button type="button" name="button" v-on:click="del(salarie._id)"> Supprimer</button>
    </div>
</template>

<script>
    import SalariesService from "@/services/SalariesService.vue";

    export default {

        data () {
            return{
                salarie : {},
            }
        },

        created() {
            let paramsId = this.$route.params.id;
            SalariesService.getSalarie(paramsId)
                .then((data) => {
                    this.salarie = data;
                })
                .catch(error => {console.log(error)});
        },
        methods: {
            del:function (id) {
                SalariesService.deleteSalarie(id);
                this.$router.push('/Salaries');
            }
        }
    }
</script>