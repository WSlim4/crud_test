import ClienteService from "../Service/ClienteService";
import { setClientes, setLoading, setError, setCurrent, removeCliente } from "../Store/Slices/clienteSlice";

const ClienteOperations = {
    getClientes: () => async dispatch => {
        try {
            dispatch(setError(false));
            dispatch(setLoading(true));
            const data = await ClienteService.getClientes();
            dispatch(setClientes(data));
            dispatch(setLoading(false));
        } catch (error) {
            console.log("Error", error);
            dispatch(setLoading(false));
            dispatch(setError(true));
        }
    },

    showCliente: (user) => async dispatch => { dispatch(setCurrent(user)) },

    deleteCliente: (id, i) => async dispatch => {
        try {
            const data = await ClienteService.remove(id);

            if (data && data.data !== null) {
                dispatch(removeCliente(i));
            }

        } catch (error) {
            console.log("Error", error);
        }

    }

}

export default ClienteOperations;