import React from "react";
import { Button, VARIANT } from "../../components/Button";
import { useDispatch } from 'react-redux'

import { changeStep } from "../../redux/reducers/steps";

import * as S from './styles'
import { Form } from "../../components/form";
import { Label, VARIANT as LABELVAR } from "../../components/label";
import { Separator } from "../../components/separator";

const Resume = () => {
    const dispatch = useDispatch()

    const name = localStorage.getItem('name')
    const email = localStorage.getItem('email')
    const age = localStorage.getItem('age')
    const gender = localStorage.getItem('gender')
    const book = localStorage.getItem('book')
    const colors = localStorage.colors ? JSON.parse(localStorage.colors) : []

    return (
        <Form role="resume">
            <S.InfoContainer>
                <Label>Name:</Label>
                <Label variant={LABELVAR.GRAY}>{name ? name : 'Not informed'}</Label>
            </S.InfoContainer>
            <Separator />
            <S.InfoContainer>
                <Label>Email:</Label>
                <Label variant={LABELVAR.GRAY}>{email ? email : 'Not informed'}</Label>
            </S.InfoContainer>
            <Separator />
            <S.DoubleContainer>
                <S.InfoContainer>
                    <Label>Age:</Label>
                    <Label variant={LABELVAR.GRAY}>{age}</Label>
                </S.InfoContainer>
                <S.InfoContainer>
                    <Label>Gender:</Label>
                    <Label variant={LABELVAR.GRAY}>{gender}</Label>
                </S.InfoContainer>
            </S.DoubleContainer>
            <Separator />
            <S.InfoContainer grid>
                <Label>Favorite Book:</Label>
                <Label variant={LABELVAR.GRAY}>{book}</Label>
            </S.InfoContainer>
            <Separator />
            <S.InfoContainer grid>
                <Label>Favorite Colors:</Label>
                <S.CheckContainer>
                    {colors.map((color: string, index: number) => 
                        <S.Item key={index}>
                            <Label variant={LABELVAR.GRAY}>{color}</Label>
                        </S.Item>
                        )
                    }
                </S.CheckContainer>
            </S.InfoContainer>
            <Separator />
            <S.ButtonContainer align="space-between">
                <Button variant={VARIANT.OUTLINED} onClick={() => dispatch(changeStep(3))}>Back</Button>
                <Button onClick={() => localStorage.setItem('submited', 'true')}>Submit</Button>
            </S.ButtonContainer>
        </Form>
    )
}

export default Resume