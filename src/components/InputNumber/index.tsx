import {
  CampoDeEntrada,
  Etiqueta,
  SalidaDeError,
  Wrapper,
} from './InputNumber.styles';

type Props = {
  label: string;
  placeholder: string;
  leyendaError: string;
};

const InputNumber: React.FC<Props> = ({ label, placeholder, leyendaError }) => (
  <Wrapper>
    <Etiqueta>{label}</Etiqueta>
    <CampoDeEntrada type='number' placeholder={placeholder} />
    <SalidaDeError>{leyendaError}</SalidaDeError>
  </Wrapper>
);

export default InputNumber;
