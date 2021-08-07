import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;

`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
`;

export const LogoWorkingClass = styled.img`
    padding: 0 1rem;
    height: 90px;

    @media screen and (max-width: 500px){
        height: 2.5rem;
    }
`;

export const Title = styled.h1`
    font-size: 3rem;
    color: #bbbbbb;

    @media screen and (max-width: 500px){
        font-size: 2rem;
    }
`;

export const LogoBrazo = styled.img`
    padding: 0 1rem;
    height: 100px;

    @media screen and (max-width: 500px){
        height: 2.5rem;
    }
`;