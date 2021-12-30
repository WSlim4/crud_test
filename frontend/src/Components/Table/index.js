import React from "react";
import { BorderColor, Delete } from '@mui/icons-material';

export default function Table({ heads, users }) {
    return (
        <table>
            <tr>
                {heads.map((head, i) => <th key={i}>{head}</th>)}
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
                        <button>
                            <BorderColor />
                        </button>
                        <button>
                            <Delete />
                        </button>
                    </td>
                </tr>
            )
            )}
        </table>
    )
}