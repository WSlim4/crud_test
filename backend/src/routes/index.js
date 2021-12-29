const { Router } = require('express');
const ClienteController = require('../controllers/ClienteController');
const routes = Router();

routes.get('/', async (req, res) => {
    try {
        const response = await ClienteController.create(req.body);

        return res.status(200).send({ data: response });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

module.exports = routes;