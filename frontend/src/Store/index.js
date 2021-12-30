import { configureStore } from '@reduxjs/toolkit'
import clienteReducer from './Slices/clienteSlice';

export default configureStore({
    reducer: {
        clientes: clienteReducer
    },
})