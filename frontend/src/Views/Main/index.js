import React from "react";
import { Container, Content } from "./styles";
import mock from "../../mock";
import Table from "../../Components/Table";
import AddIcon from '@mui/icons-material/Add';
import { IconButton, Tooltip } from '@mui/material';

export default function Main() {
    return (
        <Container>
            <Content>
                <div>

                    <Tooltip title="Adicionar">
                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </Tooltip>

                    <Table
                        heads={['Nome', 'Cpf', 'E-mail', 'Celular']}
                        users={mock.data}
                        colSpan={10}
                    />
                </div>
            </Content>
        </Container>
    )
}