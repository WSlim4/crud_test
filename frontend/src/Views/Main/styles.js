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

    border: 0.4px solid gray;

    border-radius: 8px;
    overflow: auto;
`

export { Container, Content };