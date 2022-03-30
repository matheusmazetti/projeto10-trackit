import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    left: 0;
    top: 0;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo{
        width: 97px;
        margin-left: 18px;
    }

    .userImg{
        width: 51px;
        height: 51px;
        margin-right: 18px;
    }
`;