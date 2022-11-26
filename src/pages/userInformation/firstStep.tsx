import React from "react";
import { Button, SIZES, VARIANT } from "../../components/Button";

import * as S from './styles'

const FirstStep = () => {
    return (
        <React.Fragment>
            <S.ButtonContainer>
                <Button>Continue</Button>
            </S.ButtonContainer>
        </React.Fragment>
    )
}

export default FirstStep