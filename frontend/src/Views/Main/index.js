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
                <div className="content">

                    <Tooltip title="Adicionar">
                        <IconButton>
                            <AddIcon style={{ color: '#1d1e4e' }} />
                        </IconButton>
                    </Tooltip>

                    <div className="table-wrapper">
                        <Table
                            heads={['Nome', 'Cpf', 'E-mail', 'Celular']}
                            users={mock.data}
                            colSpan={10}
                        />
                    </div>
                </div>
            </Content>
        </Container>
    )
}