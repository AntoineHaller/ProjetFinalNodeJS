module.exports = (app) => {
    const project = require('../controllers/project.controller.js');
    const salarie = require('../controllers/salarie.controller.js');
    const client = require('../controllers/client.controller.js');

    //PARTIE PROJET


    // Create a new project
    app.post('/projects', project.createProject);

    // Retrieve all projects
    app.get('/projects', project.getProjects);

    // Retrieve a single project with Id
    app.get('/projects/:id', project.getOne);

    // Update a project with Id
    app.put('/projects/:id', project.updateProject);

    // Delete a project with Id
    app.delete('/projects/:id', project.deleteProject);

    //PARTIE SALARIE

    // Create a new salarié
    app.post('/salaries', salarie.createSalarie);

    // Retrieve all psalarié
    app.get('/salaries', salarie.getSalaries);

    // Retrieve a single salarié with Id
    app.get('/salaries/:id', salarie.getOne);

    // Update a salarié with Id
    app.put('/salaries/:id', salarie.updateSalarie);

    // Delete a salarié with Id
    app.delete('/salaries/:id', salarie.deleteSalarie);

    //PARTIE CLIENT

    // Create a new client
    app.post('/clients', client.createClient);

    // Retrieve all pclient
    app.get('/clients', client.getClients);

    // Retrieve a single client with Id
    app.get('/clients/:id', client.getOne);

    // Update a client with Id
    app.put('/clients/:id', client.updateClient);

    // Delete a client with Id
    app.delete('/clients/:id', client.deleteClient);

}
