import api from '../Api';

class ClienteService {
    async getClientes() {
        try {
            const response = await api.get('/clientes');

            return response.data.data;
        } catch (error) {
            throw error;
        }
    }

    async remove(id) {
        try {
            const response = await api.delete(`/clientes/${id}`);

            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default new ClienteService;