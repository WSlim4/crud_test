const ClienteService = require('../services/ClienteService');

class ClienteController {

    async index() {
        try {
            const clientes = await ClienteService.findAll();

            return clientes;
        } catch (error) {
            throw error;
        }
    }

    async show(id) {
        try {
            const cliente = await ClienteService.findOne(id);

            return cliente;
        } catch (error) {
            throw error;
        }
    }

    async create(data) {
        try {
            const cliente = await ClienteService.save(data);

            return cliente;
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            const cliente = await ClienteService.findAndUpdate(id, data);

            return cliente;
        } catch (error) {
            throw error;
        }
    }

    async destroy(id) {
        try {
            return await ClienteService.findAndDelete(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ClienteController;