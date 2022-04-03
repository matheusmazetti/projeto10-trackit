import styled from 'styled-components';

export const Content = styled.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
`;

export const Buttons = styled.div`
    width: 340px;
    margin-left: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    button{
        width: 30px;
        height: 30px;
        margin-right: 4px;
        margin-top: 8px;
        margin-bottom: 29px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }

    .selecionado{
        background: #CFCFCF;
        color: #ffffff;
    }
`;