import { Wrapper, Agrupacion, Content, BotonSubmit } from './Formulario.styles';
import InputNumber from '../InputNumber';

const Formulario = () => {
  // Code
  return (
    <Wrapper>
      <Agrupacion>
        <legend>Tiempo trabajado</legend>
        <Content>
          <InputNumber
            label='Horas trabajadas'
            placeholder=''
            leyendaError=''
          />
          <InputNumber label='Horas nocturnas' placeholder='' leyendaError='' />
          <InputNumber label='Festivos' placeholder='' leyendaError='' />
          <InputNumber label='Otros' placeholder='' leyendaError='' />
          <BotonSubmit>Enviar</BotonSubmit>
        </Content>
      </Agrupacion>
    </Wrapper>
  );
};

export default Formulario;
