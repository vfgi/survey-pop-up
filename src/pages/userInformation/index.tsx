import React from "react";
import { useSelector } from 'react-redux'
import * as S from './styles'

import FirstStep from "./firstStep";
import SecondStep from "./secondStep";
import { RootState } from "../../redux/rootReducers";
import ThirdStep from "./thirdStep";
import Resume from "./resume";

const UserInfo = () => {
    const { stepState } = useSelector((state: RootState) => state)

    const stepTitle = ['', 'Identity information', 'Details', 'Favorites', 'Summary' ]
    const stepsComponents = ['', <FirstStep />, <SecondStep />, <ThirdStep />, <Resume />]

    return (
        <React.Fragment>
            <S.Title>
                {stepTitle[stepState.step]}
            </S.Title>
            {stepsComponents[stepState.step]}
        </React.Fragment>
    )
}

export default UserInfo