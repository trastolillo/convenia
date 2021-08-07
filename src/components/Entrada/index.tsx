import { useState } from 'react';
import {
  Agrupacion,
  Wrapper,
  Formulario,
  EntradaDatos,
  BotonSubmit,
  MensajeError,
} from './Entrada.styles';

type Trabajo = {
  horas: number;
  dias: number;
};

const trabajoVacio: Trabajo = {
  horas: 0,
  dias: 0,
};

const Input: React.FC = () => {
  const [state, setState] = useState(trabajoVacio);
  const [err, setErr] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('enviado');
    console.log(state);

    setState(trabajoVacio);
    setErr(false);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErr(false);
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    const regex = /\d+/;
    const test = regex.test(value.toString());
    console.log(test);

    if (!test) {
      setErr(true);
      return;
    }

    setState((prev) => ({ ...prev, [inputName]: value }));
    console.log(state);
  };

  return (
    <Wrapper>
      <Agrupacion>
        <legend>Tiempo trabajado</legend>
        <Formulario>
          <label>Horas ordinarias</label>
          <EntradaDatos
            type='number'
            name='horas'
            value={err ? '' : state.horas}
            onChange={handleInput}
            autoFocus
          />
          <label>Días trabajados</label>
          <EntradaDatos
            type='number'
            name='dias'
            value={err ? 0 : state.dias}
            onChange={handleInput}
          />

          <BotonSubmit onClick={handleSubmit}>Calcular</BotonSubmit>
        </Formulario>
      </Agrupacion>
    </Wrapper>
  );
};

export default Input;
