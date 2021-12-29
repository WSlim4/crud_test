const { Router } = require('express');
const ClienteController = require('../controllers/ClienteController');
const routes = Router();

routes.post('/', ClienteController.create);
routes.get('/', ClienteController.index);
routes.get('/:id', ClienteController.show);
routes.put('/:id', ClienteController.update);
routes.delete('/:id', ClienteController.destroy);

module.exports = routes;