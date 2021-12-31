import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Content } from "./styles";
import { IconButton, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Table from "../../Components/Table";
import Dialog from '../../Components/Dialog';
import ClienteOperations from '../../Operations/ClienteOperations';
import Swal from 'sweetalert2';

export default function Main() {

    const dispatch = useDispatch();

    const [dialogOpen, setOpen] = useState(false);
    const [dialogOperation, setOperation] = useState("");

    const { value: clientes, isLoading, hasError, current } = useSelector((state) => state.clientes);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => dispatch(ClienteOperations.getClientes());

    const handleInfo = (user) => {
        setOperation("info");
        setOpen(true);
        dispatch(ClienteOperations.showCliente(user))
    };

    const handleClose = () => setOpen(false);

    const handleAdd = () => {
        setOperation("add");
        setOpen(true);
    }

    const handleDelete = (id, i) => {
        Swal.fire({
            title: 'Deseja mesmo deletar este usuário?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Sim',
            denyButtonText: `Não`,
          }).then(async(result) => {
            if (result.isConfirmed) {
                await dispatch(ClienteOperations.deleteCliente(id, i));
                Swal.fire('Deletado!', '', 'success')
            }
          })
    }

    return (
        <Container>
            <Dialog
                handleClose={handleClose}
                operation={dialogOperation}
                open={dialogOpen}
            />
            <Content>
                <div className="content">

                    <Tooltip title="Adicionar">
                        <IconButton onClick={() => handleAdd()}>
                            <AddIcon style={{ color: '#1d1e4e' }} />
                        </IconButton>
                    </Tooltip>

                    <div className="table-wrapper">
                        <Table
                            handleDelete={handleDelete}
                            handleInfo={handleInfo}
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