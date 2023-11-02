import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;

    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow: scroll;
        padding: 64px;
    }

`;

export const Links = styled.ul `
    list-style: none;

    > li {
        margin-top: 12px;
        display: flex;
        flex-direction: column;
    }

    a {
        color: ${({theme}) => theme.COLORS.WHITE};
        border: none;
    }

`;

export const Content = styled.div`
    max-width: 550px;
    margin: 0 auto;

h1 {
    margin-bottom: 16px;
    color: var(--white, #F4EDE8);
    font-family: Roboto Slab;
    font-size: 36px;
    font-style: normal;
    }

p {
    color: ${({theme}) => theme.COLORS.WHITE};
    text-align: justify;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;    
}


`;


