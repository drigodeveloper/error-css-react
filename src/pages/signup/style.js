import styled from "styled-components"
import backgroundImg from "../../assets/background.png"


export const Container = styled.div `
    height: 100vh;
    display: flex;

    align-items: stretch;
`;

export const Form = styled.form `
    display: flex;
    flex-direction: column;

    padding: 0 136px;

    justify-content: center;
    align-items: center;
    text-align: center;

    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.ORANGE};

    }

    > p {
        margin-bottom: 48px;
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};

    }

    > h2 {
        margin-bottom: 48px;
        color: ${({theme}) => theme.COLORS.WHITE};

    }

    > a {
        margin-top: 124px;
        color: ${({theme}) => theme.COLORS.ORANGE};
        font-size: 16px;
    }

`;

export const Background = styled.div `
    flex: 1;

    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;