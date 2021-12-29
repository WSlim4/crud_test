const ClienteService = require('../services/ClienteService');

class ClienteController {

    async index(req, res) {
        try {
            const clientes = await ClienteService.findAll();

            return res.status(200).send({ data: clientes });
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }

    async show(req, res) {
        try {
            const cliente = await ClienteService.findOne(req.params.id);

            return res.status(200).send({ data: cliente });
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const cliente = await ClienteService.save(req.body);

            return res.status(200).send({ data: cliente });
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const cliente = await ClienteService.findAndUpdate(req.params.id, req.body);

            return res.status(200).send({ data: cliente });
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }

    async destroy(req, res) {
        try {
            const response = await ClienteService.findAndDelete(req.params.id);
            return res.status(200).send({ message: response });
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }
}

module.exports = new ClienteController;