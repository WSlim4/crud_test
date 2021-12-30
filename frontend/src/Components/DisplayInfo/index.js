import React from "react";
import { DialogTitle, DialogContent } from '@mui/material';

export default function ShowInfo({ user }) {
    return (
        <>
            <DialogTitle>
                {user.nome}
            </DialogTitle>
            <DialogContent>
                <div>
                    <p><strong>Nome:</strong> {user.nome} </p>
                    <p><strong>E-mail:</strong> {user.email}</p>
                    <p><strong>Celular:</strong> {user.celular}</p>
                    <p><strong>Cpf:</strong> {user.cpf}</p>

                    {user.endereco.rua && (
                        <p><strong>Rua:</strong> {user.endereco.rua}</p>
                    )}

                    {user.endereco.bairro && (
                        <p><strong>Bairro:</strong> {user.endereco.bairro}</p>
                    )}

                    {user.endereco.rua && (
                        <p><strong>Rua:</strong> {user.endereco.rua}</p>
                    )}

                    {user.endereco.numero && (
                        <p><strong>Número: </strong> {user.endereco.numero}</p>
                    )}

                </div>
            </DialogContent>
        </>

    )
}