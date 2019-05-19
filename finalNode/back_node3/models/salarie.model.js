const mongoose = require('mongoose');

const SalarieSchema = mongoose.Schema({
    name: String,
    firstname: String,
    birthDate: String,
    adresseRue: String,
    adresseVille: String,
    adresseCP: Number,
    tel: String,
    mail: String,
    position: String
});

module.exports = mongoose.model('Salarie', SalarieSchema);
