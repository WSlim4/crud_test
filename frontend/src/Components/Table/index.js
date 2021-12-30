import React from "react";
import { BorderColor, Delete } from '@mui/icons-material';
import { Tooltip, IconButton } from '@mui/material';
import { TableHead } from './styles';

export default function Table({ heads, users, colSpan }) {
    return (
        <table cellpadding={`${colSpan}`}>
            <TableHead>
                {heads.map((head, i) => <th key={i} style={{ textAlign: i === 0 ? 'left' : 'center' }}>{head}</th>)}
                <th>
                    Ações
                </th>
            </TableHead>
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
                                    <BorderColor style={{ color: '#1d1e4e' }} />
                                </IconButton>
                            </Tooltip>
                            <div style={{ marginLeft: 8 }}>
                                <Tooltip title="Deletar">
                                    <IconButton>
                                        <Delete style={{ color: '#1d1e4e' }} />
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