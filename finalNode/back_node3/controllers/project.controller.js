const Project = require('../models/project.model.js');

//fonction pour la création d'UN projet

exports.createProject = function(req, res) {
    let project = new Project(
        {
            name: req.body.name,
            desc: req.body.desc,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            price: req.body.price,
            status: req.body.status
        }
    );

    project.save((err) =>{
        if(err) {
            console.log(err);
        }
        else{
            console.log("Project created");
    console.log(project);
}
    res.send(project);
});
};

//Affichage de TOUS les projets

exports.getProjects = function(req, res) {
    Project.find(function(err, project) {
        if(err){
            console.log(err);
        }
        console.log("List of projects displayed!");
        res.send(project);
    });
};

//Affichage du détail d'UN projet
exports.getOne = function(req, res) {
    Project.findById(req.params.id, function(err, project) {
        if(err){
            console.log(err);
        }
        console.log("Project on display!");
        res.send(project);
    });
};

//Mise à jour d'UN projet
exports.updateProject = function(req, res) {
    Project.findByIdAndUpdate(req.params.id, req.body, function(err, project) {
        if(err){
            console.log(err);
        }
        console.log("Project updated.");
        res.send(project);
    });
};

//Suppression d'UN Projet
exports.deleteProject = function(req, res) {
    Project.findByIdAndRemove(req.params.id, function(err, project) {
        if(err){
            console.log(err);
        }
        console.log("Project deleted.");
        res.send("Project deleted.")
    });
};

