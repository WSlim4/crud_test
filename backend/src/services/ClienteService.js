const Cliente = require('../models/Cliente');

class ClienteService {
    async save(cliente_obj) {
        try {
            const cliente = new Cliente(cliente_obj);

            await cliente.save();

            return cliente;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ClienteService;