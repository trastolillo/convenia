import {
  Agrupacion,
  Wrapper,
  Formulario,
  EntradaDatos,
  BotonSubmit,
} from './Entrada.styles';

const Input: React.FC = () => (
  <Wrapper>
    <Agrupacion>
      <legend>Formulario</legend>
      <Formulario>
        <label>Horas</label>
        <EntradaDatos type='number' name='horas' />
        <BotonSubmit>Enviar</BotonSubmit>
      </Formulario>
    </Agrupacion>
  </Wrapper>
);

export default Input;
