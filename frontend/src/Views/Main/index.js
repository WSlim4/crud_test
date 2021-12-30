import React, { useEffect } from "react";
import { Container, Content } from "./styles";
import mock from "../../mock";
import Table from "../../Components/Table";
import AddIcon from '@mui/icons-material/Add';
import { IconButton, Tooltip } from '@mui/material';
import ClienteService from '../../Service/ClienteService';

export default function Main() {

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await ClienteService.getClientes();

            console.log("Response", response);
        } catch (error) {
            console.log("Error", error);
        }
    }

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