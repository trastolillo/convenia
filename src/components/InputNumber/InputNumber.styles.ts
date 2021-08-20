import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 10px auto;
    display: flex;
    flex-direction: column;
`;

export const Etiqueta = styled.label`    
    font-size: var(--fontMed);
    font-weight: 500;
    margin: auto;    
`;

export const CampoDeEntrada = styled.input`
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

export const SalidaDeError = styled.div`
    display: block;
    width: fit-content;
    margin: auto;
    padding: 5px;
    grid-column: 1 / -1;
    color: red;
    font-size: var(--fontSmall);
    text-align: center;
    background: var(--lightGrey);
    display: none;
`;