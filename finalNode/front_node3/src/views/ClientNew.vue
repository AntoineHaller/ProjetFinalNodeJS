<template>
    <div class="newClient">
        <form>
            <div class="form-group">
                NOM <input type="text" v-model="businessName">
            </div>
            <div class="form-group">
                Numéro et Rue <input type="text" v-model="adresseRue">
            </div>
            <div class="form-group">
                Ville <input type="text" v-model="adresseVille">
            </div>
            <div class="form-group">
                CP <input type="number" v-model="adresseCP">
            </div>
            <div class="form-group">
                Nom du référent <input type="text" v-model="refName">
            </div>
            <div class="form-group">
                Prénom du référent <input type="text" v-model="refFirstname">
            </div>
            <div class="form-group">
                Téléphone <input type="text" v-model="refTel">
            </div>
            <div class="form-group">
                Mail <input type="text" v-model="refMail">
            </div>
            <div class="form-group">
                Secteur <input type="text" v-model="secteur">
            </div>
            <button type="button" name="button" v-on:click="create(businessName, adresseRue, adresseVille, adresseCP, refName, refFirstname, refTel, refMail, secteur)"> Créer</button>
        </form>
    </div>
</template>

<script>

    import ClientsService from "@/services/ClientsService.vue";

    export default{
        data () {
            return{
                "businessName":businessName,
                "adresseRue":adresseRue,
                "adresseVille": adresseVille,
                "adresseCP": adresseCP,
                "refName":refName,
                "refFistname" : refFistname,
                "refTel" : refTel,
                "refMail": refMail,
                "secteur": secteur,
            }
        },
        methods: {
            create: function (businessName, adresseRue, adresseVille, adresseCP, refName, refFirstname, refTel, refMail, secteur) {
                ClientsService.createClient(businessName, adresseRue, adresseVille, adresseCP, refName, refFirstname, refTel, refMail, secteur);
                this.$router.push('/Clients');
            }
        }
    }
</script>