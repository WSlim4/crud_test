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

    width: 100%;

    .content {
        background-color: white;
        border-radius: 5px;
        
        padding: 2%;
        width: inherit;
    }

    .table-wrapper {
        overflow: auto;
        height: 50vh;
        width: 100%;
    }

    table { 
        width: 100%;
    }

    td {
            font-family: 'Nanum Gothic', sans-serif;

    font-family: 'Spline Sans', sans-serif;
    font-size: 13px;
    }

    table, tr, td  {
        border-bottom: 1px solid #ddd;
    }

    border-radius: 8px;
   
`

export { Container, Content };