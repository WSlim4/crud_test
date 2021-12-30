import api from '../Api';

class ClienteService {
    async getClientes() {
        try {
            const response = await api.get('/clientes');

            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default new ClienteService;