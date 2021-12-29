const { Router } = require('express');
const ClienteController = require('../controllers/ClienteController');
const routes = Router();

routes.post('/', async (req, res) => {
    try {
        const response = await ClienteController.create(req.body);

        return res.status(200).send({ data: response });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

routes.get('/', async (req, res) => {
    try {
        const response = await ClienteController.index();

        return res.status(200).send({ data: response });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

routes.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const response = await ClienteController.show(id);

        return res.status(200).send({ data: response });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

routes.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await ClienteController.update(id, req.body);

        return res.status(200).send({ data: response });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

module.exports = routes;