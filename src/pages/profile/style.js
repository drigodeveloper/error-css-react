import styled from "styled-components"

export const Container = styled.div`

    width: 100%;

    > header {

        background: ${({theme}) => theme.COLORS.BACKGROUND_900};
        
        width: 100%;
        height: 144px;
        display: flex;
        align-items: center;
        padding: 0 144px;
    }
     svg {

        width: 24px;
        height: 24px;
        color: ${({theme}) => theme.COLORS.GRAY_100};

    }
`;