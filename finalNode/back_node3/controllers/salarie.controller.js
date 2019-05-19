const Salarie = require('../models/salarie.model.js');

//fonction pour la création d'UN salarie

exports.createSalarie = function(req, res) {
    let salarie = new Salarie(
        {
            name: req.body.name,
            firstname: req.body.firstname,
            birthDate: req.body.birthDate,
            adresseRue: req.body.adresseRue,
            adresseVille: req.body.adresseVille,
            adresseCP: req.body.adresseCP,
            tel: req.body.tel,
            mail: req.body.mail,
            position: req.body.position

        }
    );

    salarie.save((err) =>{
        if(err) {
            console.log(err);
        }
        else{
            console.log("Salarie created");
            console.log(salarie);
        }
        res.send(salarie);
    });
};

//Affichage de TOUS les salaries

exports.getSalaries = function(req, res) {
    Salarie.find(function(err, salarie) {
        if(err){
            console.log(err);
        }
        console.log("List of salaries displayed!");
        res.send(salarie);
    });
};

//Affichage du détail d'UN salarie
exports.getOne = function(req, res) {
    Salarie.findById(req.params.id, function(err, salarie) {
        if(err){
            console.log(err);
        }
        console.log("Salarie on display!");
        res.send(salarie);
    });
};

//Mise à jour d'UN salarie
exports.updateSalarie = function(req, res) {
    Salarie.findByIdAndUpdate(req.params.id, req.body, function(err, salarie) {
        if(err){
            console.log(err);
        }
        console.log("Salarie updated.");
        res.send(salarie);
    });
};

//Suppression d'UN salarie
exports.deleteSalarie = function(req, res) {
    Salarie.findByIdAndRemove(req.params.id, function(err, salarie) {
        if(err){
            console.log(err);
        }
        console.log("Salarie deleted.");
        res.send("Salarie deleted.")
    });
};