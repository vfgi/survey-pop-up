import React from "react";
import { Button, VARIANT } from "../../components/Button";
import { useSelector, useDispatch } from 'react-redux'

import Input from "../../components/Input";
import { changeStep } from "../../redux/reducers/steps";

import * as S from './styles'

const ThirdStep = () => {
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <S.InputContainer>
                <Input label="teste 3:" margin/>
                <Input label="Email:" margin/>
            </S.InputContainer>
            <S.ButtonContainer>
                <Button variant={VARIANT.OUTLINED} onClick={() => dispatch(changeStep(2))}>Back</Button>
                <Button onClick={() => dispatch(changeStep(4))}>Continue</Button>
            </S.ButtonContainer>
        </React.Fragment>
    )
}

export default ThirdStep