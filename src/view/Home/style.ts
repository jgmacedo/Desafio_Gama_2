import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;

    section{
        height: 100vh;
        width: 100%;
        background: #e2e2e2;
        display: flex;
        padding: 10px;

        .product-content{
            display: grid;
            text-align: center;
            height: 390px;
            background: #fff;
            border-radius: 12px;
            padding: 21px;
            margin: 5px;
         }
    }
`