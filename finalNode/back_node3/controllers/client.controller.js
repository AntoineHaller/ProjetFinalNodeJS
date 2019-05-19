const Client = require('../models/client.model.js');

//fonction pour la création d'UN client

exports.createClient = function(req, res) {
    let client = new Client(
        {
            businessName: req.body.businessName,
            adresseRue: req.body.adresseRue,
            adresseVille: req.body.adresseVille,
            adresseCP: req.body.adresseCP,
            refName: req.body.refName,
            refFirstname: req.body.refFirstname,
            refTel: req.body.refTel,
            refMail: req.body.refMail,
            secteur: req.body.secteur
        }
    );

    client.save((err) =>{
        if(err) {
            console.log(err);
        }
        else{
            console.log("Client created");
            console.log(client);
        }
        res.send(client);
    });
};

//Affichage de TOUS les clients

exports.getClients = function(req, res) {
    Client.find(function(err, client) {
        if(err){
            console.log(err);
        }
        console.log("List of clients displayed!");
        res.send(client);
    });
};

//Affichage du détail d'UN client
exports.getOne = function(req, res) {
    Client.findById(req.params.id, function(err, client) {
        if(err){
            console.log(err);
        }
        console.log("Client on display!");
        res.send(client);
    });
};

//Mise à jour d'UN client
exports.updateClient = function(req, res) {
    Client.findByIdAndUpdate(req.params.id, req.body, function(err, client) {
        if(err){
            console.log(err);
        }
        console.log("Client updated.");
        res.send(client);
    });
};

//Suppression d'UN client
exports.deleteClient = function(req, res) {
    Client.findByIdAndRemove(req.params.id, function(err, client) {
        if(err){
            console.log(err);
        }
        console.log("Client deleted.");
        res.send("Client deleted.")
    });
};