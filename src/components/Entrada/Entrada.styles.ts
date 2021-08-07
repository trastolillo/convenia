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
    border: 1px solid #ff5b5b;

    legend {
        padding: 0 10px;
    }

    @media screen and (max-width: 500px){
        margin: 1.5rem 1rem;
    }
`;

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 0.8rem;
`;

export const EntradaDatos = styled.input`
    background: #ddd;
    height: 2rem;
    font-size: 1rem;
    padding: 0.5rem;
    
`;

export const BotonSubmit = styled.button`
    font-size: var(--fontMed);
    max-width: 40%;
    margin: auto;
    padding: 0.5rem;
`;