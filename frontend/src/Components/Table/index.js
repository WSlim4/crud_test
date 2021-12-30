import React from "react";
import { BorderColor, Delete, Info } from '@mui/icons-material';
import { Tooltip, IconButton } from '@mui/material';
import { TableHead, TableRow } from './styles';
import TableLoading from "../TableLoading";

export default function Table({ handleDelete, handleInfo, isLoading, hasError, heads, users, colSpan }) {
    return (
        <table cellPadding={`${colSpan}`}>
            <TableHead>
                {heads.map((head, i) =>
                    <th key={i} style={{ textAlign: i === 0 ? 'left' : 'center' }}>{head}</th>)}
                <th>
                    Ações
                </th>

            </TableHead>

            {isLoading === true && hasError === false && (
                <TableLoading />
            )}
            {isLoading === false && hasError === false && users && users.map((user, i) =>
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
                            <IconButton onClick={() => handleInfo(user)}>
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