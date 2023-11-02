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

    > button {
        background: none;
        border: none;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    max-width: 340px;

    margin: -92px auto 0;

    > div:nth-child(4) {
        margin-top: 24px;
    }
`;

export const Avatar = styled.div`

    position: relative;
    margin: 0 auto 32px;
    justify-content: center;
    
    > img { 
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${({theme}) => theme.COLORS.ORANGE};
        border-radius: 50%;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input {
            display: none;
        }
        
        svg {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        }
    }


`;