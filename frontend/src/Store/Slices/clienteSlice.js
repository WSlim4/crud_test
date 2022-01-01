import { createSlice } from '@reduxjs/toolkit'

export const clienteSlice = createSlice({
    name: 'clientes',
    initialState: {
        value: {
            docs: []
        },
        current: {},
        isLoading: false,
        hasError: false
    },
    reducers: {
        setClientes: (state, action) => {
            state.value = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.hasError = action.payload;
        },
        setCurrent: (state, action) => {
            state.current = action.payload;
        },
        removeCliente: (state, action) => {
            state.value.docs = state.value.docs.filter((value, i) => i !== action.payload)
        }
    },
})

export const { 
    setClientes, 
    setLoading, 
    setError, 
    setCurrent, 
    removeCliente
} = clienteSlice.actions

export default clienteSlice.reducer