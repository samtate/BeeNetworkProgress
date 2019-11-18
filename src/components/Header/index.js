import React from 'react';
import {
  Header,
  Container,
  Logo,
  LogoType
} from './styled.js';

import BoroughSelect from '../BoroughSelect';

const HeaderBar = ({ doUpdateBorough, borough }) => {

  return (
    <Header>
      <Container>
        <Logo>
          <LogoType>Bee Network Progress</LogoType>
        </Logo>
        {borough ? (
          <BoroughSelect doUpdateBorough={doUpdateBorough} borough={borough} />
        ) : ('')}
      </Container>
    </Header>
  );
}
export default HeaderBar;
