const Cliente = require('../Models/Cliente');

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

    async findAll(page = 1) {
        try {
            
            const options = {
                page: page,
                limit: 10,
                collation: {
                  locale: 'en',
                },
              };
            

            const clientes = await Cliente.paginate({}, options, function(err, result){
                return result;
            });

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