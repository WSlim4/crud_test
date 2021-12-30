import React from "react";
import { BorderColor, Delete } from '@mui/icons-material';
import { Tooltip, IconButton } from '@mui/material';

export default function Table({ heads, users, colSpan }) {
    return (
        <table style={{ marginTop: 10 }} cellpadding={`${colSpan}`}>
            <tr>
                {heads.map((head, i) => <th key={i} style={{ textAlign: i === 0 ? 'left' : 'center' }}>{head}</th>)}
                <th>
                    Ações
                </th>
            </tr>
            {users.map(user =>
            (
                <tr key={user.id}>
                    <td>
                        {user.nome}
                    </td>
                    <td>
                        {user.cpf}
                    </td>
                    <td>
                        {user.email}
                    </td>
                    <td>
                        {user.celular}
                    </td>
                    <td>
                        <div style={{ display: 'flex' }}>

                            <Tooltip title="Editar">
                                <IconButton>
                                    <BorderColor />
                                </IconButton>
                            </Tooltip>

                            <div style={{ marginLeft: 8 }}>
                                <Tooltip title="Deletar">
                                    <IconButton>
                                        <Delete />
                                    </IconButton>
                                </Tooltip>
                            </div>

                        </div>
                    </td>
                </tr>
            )
            )}
        </table>
    )
}