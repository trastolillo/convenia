import styled from "styled-components";

export const Wrapper = styled.article`
    background: var(--medGrey);
    font-size: var(--fontMed);
`;

export const Agrupacion = styled.fieldset`
    padding: 1rem;
    max-width: 500px;
    margin: 1.5rem auto;
    border-radius: 5px;
    border: 1px solid var(--redForm);

    legend {
        padding: 0 10px;
        font-size: var(--fontMed);
    }

    @media screen and (max-width: 500px){
        margin: 1.5rem 1rem;
        max-width: 400px;
    }
`;

export const Content = styled.form`
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: center;
    align-content: center;
    grid-row-gap: 15px;
    

    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
    }   
`;

export const BotonSubmit = styled.button`
    font-size: var(--fontMed);
    width: 40%;
    margin: 0.5rem auto;
    padding: 0.4rem;
    grid-column: 1 / -1;
    border-radius: 30px;
    border: 0;
    cursor: pointer;
    outline: none;
    opacity: 0.8;
    background: var(--redForm);
    transition: all 0.3s;

    :hover {
        opacity: 1;
    }
    
`;