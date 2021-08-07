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

export const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: center;
    align-content: center;
    grid-row-gap: 15px;
    

    label {
        font-size: var(--fontMed);
        font-weight: 500;
        margin: auto;
    }

    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
    }   
`;

export const EntradaDatos = styled.input`
    margin: auto;
    background: var(--lightGrey);
    height: 2rem;
    max-width: 80%;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0.5rem;
    text-align: center;
    border: 0;
    border-radius: 10px;

    :focus {
        outline: 1px solid var(--redForm);
        background: white;
    }    
`;

export const MensajeError = styled.p`
    display: block;
    width: fit-content;
    margin: auto;
    padding: 5px;
    grid-column: 1 / -1;
    color: red;
    font-size: var(--fontSmall);
    text-align: center;
    background: var(--lightGrey);
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
    background: var(--redForm);
    transition: all 0.3s;

    :hover {
        opacity: 0.8;
    }
    
`;