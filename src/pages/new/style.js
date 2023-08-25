import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    

`;

export const Form = styled.div `
    max-width: 550px;
    margin: 36px 0;
    

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 36px;
    }

    > h2 {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        border-bottom-width: 550px;
        border-bottom-color: ${({theme}) => theme.COLORS.GRAY_100};

    }
`;