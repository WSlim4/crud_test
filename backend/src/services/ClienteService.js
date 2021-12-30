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

    async findAll() {
        try {
            const clientes = await Cliente.find({});

            return clientes;
        } catch (error) {
            throw error;
        }
    }

    async findOne(id) {
        try {
            const cliente = await Cliente.findById(id);

            return cliente;
        } catch (error) {
            throw error;
        }
    }

    async findAndUpdate(id, data) {
        try {
            const cliente = await Cliente.findOneAndUpdate({ _id: id }, data);

            return await this.findOne(cliente.id);
        } catch (error) {
            throw error;
        }
    }

    async findAndDelete(id) {
        try {

            await Cliente.deleteOne({ _id: id });

            return 'Cliente deletado!'
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ClienteService;