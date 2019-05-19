<template>

    <div class="SalarieEdit">
        <form>
            <div class="form-group">
                NOM <input type="text" v-model="name">
            </div>
            <div class="form-group">
                Prénom <input type="text" v-model="firstname">
            </div>
            <div class="form-group">
                Date de naissance <input type="text" v-model="birthDate">
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
                Téléphone <input type="text" v-model="tel">
            </div>
            <div class="form-group">
                Mail <input type="text" v-model="mail">
            </div>
            <div class="form-group">
                Poste <input type="text" v-model="position">
            </div>
            <button type="button" name="button" v-on:click="edit(id, name, firstname, birthDate, adresseRue, adresseVille, adresseCP, tel, mail, position)"> Modifier</button>
        </form>
    </div>
</template>

<script>

    import SalariesService from "@/services/SalariesService.vue";

    export default{
        data () {
            return{
                name: "",
                firstname: "",
                birthDate: "",
                adresseRue: "",
                adresseVille: "",
                adresseCP: "",
                tel: "",
                mail: "",
                position: "",
                id: this.$route.params.id
            }
        },
        created() {
            SalariesService.getSalarie(this.id)
                .then((data) => {
                    this.name = data.name;
                    this.firstname = data.firstname;
                    this.birthDate = data.birthDate;
                    this.adresseRue = data.adresseRue;
                    this.adresseVille = data.adresseVille;
                    this.adresseCP = data.adresseCP;
                    this.tel = data.tel;
                    this.mail = data.mail;
                    this.position = data.position;
                })
                .catch(error => {console.log(error)});
        },
        methods: {
            edit: function (id, name, firstname, birthDate, adresseRue, adresseVille, adresseCP, tel, mail, position) {
                SalariesService.editSalarie(id, name, firstname, birthDate, adresseRue, adresseVille, adresseCP, tel, mail, position);
                this.$router.push('/Salaries');
            }
        }
    }
</script>