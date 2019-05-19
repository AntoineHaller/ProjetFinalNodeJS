<template>

    <div class="ClientEdit">
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
            <button type="button" name="button" v-on:click="edit(id, businessName, adresseRue, adresseVille, adresseCP, refName, refFirstname, refTel, refMail, secteur)"> Modifier</button>
        </form>
    </div>
</template>

<script>

    import ClientsService from "@/services/ClientsService.vue";

    export default{
        data () {
            return{
                businessName: "",
                adresseRue: "",
                adresseVille: "",
                adresseCP: "",
                refFirstname: "",
                refName: "",
                refTel: "",
                refMail: "",
                secteur: "",
                id: this.$route.params.id
            }
        },
        created() {
            ClientsService.getClient(this.id)
                .then((data) => {
                    this.businessName = data.businessName;
                    this.adresseRue = data.adresseRue;
                    this.adresseVille = data.adresseVille;
                    this.adresseCP = data.adresseCP;
                    this.refFirstname = data.refFirstname;
                    this.refName = data.refName;
                    this.refTel = data.refTel;
                    this.refMail = data.refMail;
                    this.secteur = data.secteur;
                })
                .catch(error => {console.log(error)});
        },
        methods: {
            edit: function (id, businessName, adresseRue, adresseVille, adresseCP, refName, refFirstname, refTel, refMail, secteur) {
                ClientsService.editClient(id, businessName, adresseRue, adresseVille, adresseCP, refName, refFirstname, refTel, refMail, secteur);
                this.$router.push('/Clients');
            }
        }
    }
</script>
