import React from "react";

import { DialogTitle, DialogContent, TextField } from '@mui/material';

export default function DisplayForm() {
    return (
        <>
            <DialogTitle>
                Cadastrar cliente
            </DialogTitle>
            <DialogContent style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <TextField placeholder="Nome" variant="outlined" />
                    <TextField placeholder="Cpf" variant="outlined" />
                    <TextField placeholder="Celular" variant="outlined" />
                    <TextField placeholder="E-mail" variant="outlined" />
                </div>
                <div>
                    <TextField placeholder="UF" variant="outlined" />
                    <TextField placeholder="Rua" variant="outlined" />
                    <TextField placeholder="Bairro" variant="outlined" />
                    <TextField placeholder="Cidade" variant="outlined" />
                </div>
            </DialogContent>
        </>

    )
}