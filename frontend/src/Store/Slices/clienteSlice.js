import { createSlice } from '@reduxjs/toolkit'

export const clienteSlice = createSlice({
    name: 'clientes',
    initialState: {
        value: [],
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
    },
})

export const { setClientes, setLoading, setError } = clienteSlice.actions

export default clienteSlice.reducer