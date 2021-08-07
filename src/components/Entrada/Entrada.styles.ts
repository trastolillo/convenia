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
    border-radius: 10px;
    
`;

export const MensajeError = styled.p``;

export const BotonSubmit = styled.button`
    font-size: var(--fontMed);
    width: 40%;
    margin: 0.5rem auto;
    padding: 0.4rem;
    grid-column: 1 / -1;
    border-radius: 10px;
`;