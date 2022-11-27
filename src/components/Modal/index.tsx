import React from 'react'

import * as S from './styles'

interface ModalProps {
    children?: JSX.Element
    role: string
}

const Modal: React.FC<ModalProps> = ({children, role}) => {
  return (
   <S.Container role={role}>
      <S.Modal>
        {children}
       </S.Modal>
    </S.Container>
  );
}

export default Modal;
