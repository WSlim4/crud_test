const { Router } = require('express');
const routes = Router();

routes.get('/', (req, res) => {
    try {
        return res.status(200).send({ message: 'Api running' });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

module.exports = routes;