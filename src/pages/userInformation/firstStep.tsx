import React from "react";
import { useSelector, useDispatch } from 'react-redux'

import { Button } from "../../components/Button";
import Input from "../../components/Input";
import { changeStep } from "../../redux/reducers/steps";

import * as S from './styles'

const FirstStep = () => {
    const dispatch = useDispatch()  

    return (
        <React.Fragment>
            <S.InputContainer>
                <Input label="Name:" margin/>
                <Input label="Email:" margin/>
            </S.InputContainer>
            <Button onClick={() => dispatch(changeStep(2))}>Continue</Button>
        </React.Fragment>
    )
}

export default FirstStep