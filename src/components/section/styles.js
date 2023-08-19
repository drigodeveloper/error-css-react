import { styled } from "styled-components";

export const Container = styled.section`
    margin: 50px 0 28px;

    > h2 {
        border: 1px solid ${({theme}) => theme.COLORS.WHITE};
        padding-bottom: 16px;
        margin-bottom: 24px;

        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: 400;

    }
`;