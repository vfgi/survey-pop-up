import React from 'react';

import * as S from './styles'

interface FooterProps {
    children?: JSX.Element
  }

const Footer: React.FC<FooterProps> = ({children}) => {
  return (
   <S.Container>
        {children}
    </S.Container>
  );
}

export default Footer;
