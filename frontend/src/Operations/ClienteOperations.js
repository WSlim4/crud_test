import ClienteService from "../Service/ClienteService";
import { 
    setClientes, 
    setLoading, 
    setError, 
    setCurrent, 
    removeCliente
} from "../Store/Slices/clienteSlice";

import Swal from "sweetalert2";

const ClienteOperations = {
    getClientes: (page) => async dispatch => {
        try {
            dispatch(setError(false));
            dispatch(setLoading(true));
            const data = await ClienteService.getAll(page);
            dispatch(setClientes(data));
            dispatch(setLoading(false));
        } catch (error) {
            console.log("Error", error);
            dispatch(setLoading(false));
            dispatch(setError(true));
        }
    },

    showCliente: (user) => async dispatch => {
        let _user = {...user};
        let _endereco = {..._user.endereco};
        _endereco.numero = _endereco.numero === 0 ? "" : _endereco.numero;
        _user.endereco = _endereco;

        dispatch(setCurrent(_user)) 
    },

    deleteCliente: (id, i) => async dispatch => {
        try {
            const data = await ClienteService.remove(id);

            if (data && data.message !== null) {
                dispatch(removeCliente(i));
            }

        } catch (error) {
            console.log("Error", error);
        }

    },

    saveCliente: async (data) => {
        try {
            await ClienteService.save(data);

        } catch (error) {
            console.log("Error", error);
            Swal.fire({
                title: 'Cpf já cadastrado!',
                icon: 'error'
            })
            throw error;
        }
    },

    updateCliente: async (data) => {
        try {
            await ClienteService.update(data._id, data);
            
        } catch (error) {
            console.log("Error", error);
            throw error;
            
        }
    }

}

export default ClienteOperations;