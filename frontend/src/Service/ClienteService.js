import api from '../Api';

class ClienteService {
    async getAll(page = 1) {
        try {
            const response = await api.get(`/clientes?page=${page}`);

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

    async save(data) {
        try {
            const response = await api.post('/clientes', data);

            return response.data.data;
        } catch (error) {
            throw error;
        }
    }

    async update(id, user) {
        try {
            const response = await api.put(`/clientes/${id}`, user);

            return response.data.data;
        } catch (error) {
            throw error;
        }
    }
}

export default new ClienteService;