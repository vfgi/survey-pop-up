import React from "react";
import * as S from './styles'

interface InputProps {
    label: string
    margin?: boolean
}

const Input: React.FC<InputProps> = ({label, margin}) => {
    return(
        <S.InputContainer margin={margin}>
            <S.Label>
                {label}
            </S.Label>
            <S.InputStyle />
        </S.InputContainer>
    )
}

export default Input