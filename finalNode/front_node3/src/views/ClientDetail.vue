<template lang="html">
    <div class="client-detail">

        <h2>Nom :{{client.businessName}}</h2>
        <h2>Numéro et Rue:{{client.adresseRue}}</h2>
        <h2>Ville :{{client.adresseVille}}</h2>
        <h2>CP :{{client.adresseCP}}</h2>
        <h2>Nom du référent :{{client.refName}}</h2>
        <h2>Prénom du référent :{{client.refFirstname}}</h2>
        <h2>Téléphone du référent :{{client.refTel}}</h2>
        <h2>Mail du référent :{{client.refMail}}</h2>
        <h2>Secteur d'activité :{{client.secteur}}</h2>
        <a v-bind:href="'/Clients-edit/' + client._id">Modifier</a>
        <button type="button" name="button" v-on:click="del(client._id)"> Supprimer</button>
    </div>
</template>

<script>
    import ClientsService from "@/services/ClientsService.vue";

    export default {

        data () {
            return{
                client : {},
            }
        },

        created() {
            let paramsId = this.$route.params.id;
            ClientsService.getClient(paramsId)
                .then((data) => {
                    this.client = data;
                })
                .catch(error => {console.log(error)});
        },
        methods: {
            del:function (id) {
                ClientsService.deleteClient(id);
                this.$router.push('/Clients');
            }
        }
    }
</script>