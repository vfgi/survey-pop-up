import React from 'react';

import * as S from './styles'

interface ModalProps {
    children?: JSX.Element
}

const Modal: React.FC<ModalProps> = ({children}) => {
  return (
   <S.Container>
        {children}
    </S.Container>
  );
}

export default Modal;
