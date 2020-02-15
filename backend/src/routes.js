const devControllers = require('./controllers/DevControllers')
const pesquisarControllers = require('./controllers/PesquisarController')
const { Router } = require('express');
const routes = Router();

routes.get('/devs', devControllers.index)
routes.get('/pesquisar', pesquisarControllers.index)
routes.post('/devs', devControllers.store);

module.exports = routes;

