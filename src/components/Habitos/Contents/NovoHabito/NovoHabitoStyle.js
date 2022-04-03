import styled from 'styled-components';

export const Content = styled.div`
    width: 340px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border-radius: 5px;

    input{
        width: 303px;
        height: 45px;
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

export const LowerButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .cancelar{
        width: 69px;
        height: 20px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        background-color: #ffffff;
        border: 0px;
        text-align: center;
        color: #52B6FF;
        margin-right: 23px;
    }

    .salvar{
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: 0px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #ffffff;
        margin-right: 20px;
    }

`;