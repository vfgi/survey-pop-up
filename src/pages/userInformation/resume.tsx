import React from "react";
import { Button, VARIANT } from "../../components/Button";
import { useSelector, useDispatch } from 'react-redux'

import {Input} from "../../components/input";
import { changeStep } from "../../redux/reducers/steps";

import * as S from './styles'

const Resume = () => {
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <S.InputContainer>
                <Input margin/>
                <Input margin/>
            </S.InputContainer>
            <S.ButtonContainer align="space-between">
                <Button variant={VARIANT.OUTLINED} onClick={() => dispatch(changeStep(3))}>Back</Button>
                <Button>Finish</Button>
            </S.ButtonContainer>
        </React.Fragment>
    )
}

export default Resume