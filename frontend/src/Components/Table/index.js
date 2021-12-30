import React from "react";
import { BorderColor, Delete, Info } from '@mui/icons-material';
import { Tooltip, IconButton } from '@mui/material';
import { TableHead, TableRow } from './styles';

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
                <TableRow key={user.id}>
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
                    <td className="button-group">

                        <Tooltip title="Editar">
                            <IconButton>
                                <BorderColor style={{ color: '#1d1e4e' }} />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Deletar">
                            <IconButton>
                                <Delete style={{ color: '#1d1e4e' }} />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Visualizar">
                            <IconButton>
                                <Info style={{ color: '#1d1e4e' }} />
                            </IconButton>
                        </Tooltip>

                    </td>
                </TableRow>
            )
            )}
        </table>
    )
}