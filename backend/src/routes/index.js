const { Router } = require('express');
const ClienteController = require('../controllers/ClienteController');
const clienteValidator = require('../validations/cliente');
const routes = Router();

routes.post('/', clienteValidator, ClienteController.create);
routes.get('/:page', ClienteController.index);
routes.get('/:id', ClienteController.show);
routes.put('/:id', clienteValidator, ClienteController.update);
routes.delete('/:id', ClienteController.destroy);

module.exports = routes;