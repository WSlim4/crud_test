import React from "react";
import { Container, Content } from "./styles";
import mock from "../../mock";
import Table from "../../Components/Table";

export default function Main() {
    return (
        <Container>
            <Content>
                <Table heads={['Nome', 'Cpf', 'E-mail']} users={mock.data} />
            </Content>
        </Container>
    )
}