const ClienteService = require('../services/ClienteService');

class ClienteController {

    async create(data) {
        try {
            const cliente = await ClienteService.save(data);

            return cliente;
        } catch (error) {
            throw error;
        }
    }

    async index() {

    }

    async show() {

    }

    async delete() {

    }

    async update() {

    }
}

module.exports = new ClienteController;