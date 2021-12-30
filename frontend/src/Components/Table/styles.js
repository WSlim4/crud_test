import styled from "styled-components";

const TableHead = styled.tr`
    background-color: #1d1e4e;
    color: #e5bd1a;
    font-weight: 500;
    font-size: 14px;
    font-family: 'Spline Sans', sans-serif;
`

const TableRow = styled.tr`
    .button-group {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 10px;
        align-items: center;
        justify-content: center;
    }
`

export { TableHead, TableRow };