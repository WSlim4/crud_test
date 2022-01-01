const { Router } = require('express');
const ClienteController = require('../Controllers/ClienteController');
const clienteValidator = require('../Validations/cliente');
const routes = Router();

routes.post('/', clienteValidator, ClienteController.create);
routes.get('/', ClienteController.index);
routes.get('/:id', ClienteController.show);
routes.put('/:id', clienteValidator, ClienteController.update);
routes.delete('/:id', ClienteController.destroy);

module.exports = routes;