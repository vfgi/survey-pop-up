import React from 'react';

import * as S from './styles'

interface HeaderProps {
    children?: JSX.Element
  }

const Header: React.FC<HeaderProps> = ({children}) => {
  return (
   <S.Container>
        {children}
    </S.Container>
  );
}

export default Header;
