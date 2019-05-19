const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    businessName: String,
    adresseRue: String,
    adresseVille: String,
    adresseCP: Number,
    refName: String,
    refFirstname: String,
    refTel: String,
    refMail: String,
    secteur: String
});

module.exports = mongoose.model('Client', ClientSchema);
