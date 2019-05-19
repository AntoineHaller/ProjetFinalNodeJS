<template>
    <div class="newSalarie">
        <form>
            <div class="form-group">
                NOM <input type="text" v-model="name">
            </div>
            <div class="form-group">
                Prénom <input type="text" v-model="firstname">
            </div>
            <div class="form-group">
                Date de naissance <input type="text" v-model="birthdate">
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
            <button type="button" name="button" v-on:click="create(name, firstname, birthdate, adresseRue, adresseVille, adresseCP, tel, mail, position)"> Créer</button>
        </form>
    </div>
</template>

<script>

    import SalariesService from "@/services/SalariesService.vue";

    export default{
        data () {
            return{
                "name":name,
                "firstname":firstname,
                "birthDate" : birthDate,
                "adresseRue":adresseRue,
                "adresseVille": adresseVille,
                "adresseCP": adresseCP,
                "tel": tel,
                "mail": mail,
                "position": position
            }
        },
        methods: {
            create: function (name, firstname, birthdate, adresseRue, adresseVille, adresseCP, tel, mail, position) {
                SalariesService.createSalarie(name, firstname, birthdate, adresseRue, adresseVille, adresseCP, tel, mail, position);
                this.$router.push('/Salaries');
            }
        }
    }
</script>