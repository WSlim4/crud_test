import ClienteService from "../Service/ClienteService";
import { setClientes, setLoading, setError } from "../Store/Slices/clienteSlice";

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
    }
}

export default ClienteOperations;