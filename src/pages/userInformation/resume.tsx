import React from "react";
import { Button, VARIANT } from "../../components/Button";
import { useSelector, useDispatch } from 'react-redux'

import Input from "../../components/Input";
import { changeStep } from "../../redux/reducers/steps";

import * as S from './styles'

const Resume = () => {
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <S.InputContainer>
                <Input label="teste:4" margin/>
                <Input label="Email:" margin/>
            </S.InputContainer>
            <S.ButtonContainer>
                <Button variant={VARIANT.OUTLINED} onClick={() => dispatch(changeStep(3))}>Back</Button>
                <Button>Finish</Button>
            </S.ButtonContainer>
        </React.Fragment>
    )
}

export default Resume