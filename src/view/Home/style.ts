import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;

    .logo {
        display:flex;
        align-items: center;
        justify-content:space-between;
        font-size: 3.4em;
        margin-top: 10px;
    }

    .nav{
        display:flex;
        align-items: center;
        justify-content:space-between;

        .cart{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    
    section{
        height: 100vh;
        width: 100%;
        background: #e2e2e2;
        display: flex;
        padding: 10px;
        justify-content: space-around;


        .product-content{
            display: grid;
            text-align: center;
            height: 390px;
            background: #fff;
            border-radius: 12px;
            padding: 21px;
            margin: 5px;
            max-width: 80%;
         }
    }
`