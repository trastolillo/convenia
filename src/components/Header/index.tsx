import {
  Wrapper,
  Content,
  LogoWorkingClass,
  Title,
  LogoBrazo,
} from './Header.styles';

import logo_working_class from '../../images/working_class.svg';
import logo_brazo from '../../images/brazo_en_alto.svg';

const Header: React.FC = () => (
  <Wrapper>
    <Content>
      <LogoWorkingClass src={logo_working_class} />
      <Title>Convenia</Title>
      <LogoBrazo src={logo_brazo} />
    </Content>
  </Wrapper>
);

export default Header;
