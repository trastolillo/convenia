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
      <legend>Tiempo trabajado</legend>
      <Formulario>
        <label>Horas ordinarias</label>
        <EntradaDatos type='number' name='horas' />
        <label>Días trabajados</label>
        <EntradaDatos type='number' name='horas' />
        <BotonSubmit>Calcular</BotonSubmit>
      </Formulario>
    </Agrupacion>
  </Wrapper>
);

export default Input;
