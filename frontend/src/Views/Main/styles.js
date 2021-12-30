import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10% 8% 5% 8%;
`

const Content = styled.div`
    padding: 2%;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0.4px solid #1d1e4e;

    background-color: #e5bd1a;

    .content {
        background-color: white;
        border-radius: 5px;
        overflow: auto;
        padding: 2%;
    }

    border-radius: 8px;
   
`

export { Container, Content };