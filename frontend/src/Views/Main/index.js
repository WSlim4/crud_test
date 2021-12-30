import React, { useState, useEffect } from "react";
import { Container, Content } from "./styles";
import mock from "../../mock";
import Table from "../../Components/Table";
import AddIcon from '@mui/icons-material/Add';
import { IconButton, Tooltip } from '@mui/material';
import ClienteOperations from '../../Operations/ClienteOperations';
import { useSelector, useDispatch } from 'react-redux';
import Dialog from '../../Components/Dialog';

export default function Main() {

    const dispatch = useDispatch();
    const [open, setOpen] = useState(true);

    const { value: clientes, isLoading, hasError } = useSelector((state) => state.clientes);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => dispatch(ClienteOperations.getClientes());

    return (
        <Container>
            <Dialog open={open} />
            <Content>
                <div className="content">

                    <Tooltip title="Adicionar">
                        <IconButton>
                            <AddIcon style={{ color: '#1d1e4e' }} />
                        </IconButton>
                    </Tooltip>

                    <div className="table-wrapper">
                        <Table
                            isLoading={isLoading}
                            hasError={hasError}
                            heads={['Nome', 'Cpf', 'E-mail', 'Celular']}
                            users={clientes}
                            colSpan={10}
                        />
                        {
                            isLoading === false &&
                            hasError === false &&
                            clientes &&
                            clientes.length === 0 && (
                                <div className="empty-clients">
                                    Nenhum cliente encontrado
                                </div>
                            )}
                    </div>
                </div>
            </Content>
        </Container>
    )
}