const express = require("express");

const OngController = require('./controller/OngController')
const IncidentsController = require('./controller/IncidentsController')
const ProfileController = require('./controller/ProfileController')
const SessionController = require('./controller/SessionController')
const routes  = express.Router();

routes.post('/session', SessionController.create)

routes.get('/ongs', OngController.index); // Rota de listagem
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index); // Listar os incidents
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;
