import React from "react";
import { Button, VARIANT } from "../../components/Button";
import { useSelector, useDispatch } from 'react-redux'

import {Input} from "../../components/input";
import { changeStep } from "../../redux/reducers/steps";

import * as S from './styles'

const SecondStep = () => {
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <S.InputContainer>
                <Input margin/>
                <Input margin/>
            </S.InputContainer>
            <S.ButtonContainer>
                <Button variant={VARIANT.OUTLINED} onClick={() => dispatch(changeStep(1))}>Back</Button>
                <Button onClick={() => dispatch(changeStep(3))}>Continue</Button>
            </S.ButtonContainer>
        </React.Fragment>
    )
}

export default SecondStep