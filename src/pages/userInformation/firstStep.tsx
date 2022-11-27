import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";


import { Button } from "../../components/Button";
import {Input, VARIANT} from "../../components/input";
import { changeStep } from "../../redux/reducers/steps";

import * as S from './styles'
import { Label } from "../../components/label";
import { ErrorMessage } from "../../components/errorMessage";
import { Form } from "../../components/form";

interface FormProps {
    name: string
    email: string
}

const FirstStep = () => {
    const dispatch = useDispatch()  
    const onSubmit = (data: FormProps) => {
        localStorage.setItem('name', data.name);
        localStorage.setItem('email', data.email);
        localStorage.setItem('step', '2');
        dispatch(changeStep(2))
    };
    
    const useFormInstance = useForm<FormProps>({
        defaultValues: {
          name: localStorage.getItem('name') || '',
          email: localStorage.getItem('email') || '',
        },
    })

    const {
        formState: { errors },
        handleSubmit,
        register,
        setValue,
        clearErrors,
        watch,
    } = useFormInstance

    useEffect(() => {
        register('name', { required: false })
        register('email', { required: false, pattern: /^\S+@\S+$/i  })
    }, [register])

    return (
        <React.Fragment>
            <Form role="firstStep" onSubmit={handleSubmit(onSubmit)}>
                <S.InputContainer>
                    <Label>Name:</Label>
                    <Input 
                        onChange={(e) => setValue('name', e.target.value)}
                        placeholder="Enter your name" 
                        value={watch('name')}
                        margin
                    />
                    <Label variant={errors.email ? VARIANT.ERROR : VARIANT.DEFAULT}>E-mail:</Label>
                    <Input
                        onChange={(e) => {
                            setValue('email', e.target.value)
                            clearErrors('email')
                        }}
                        value={watch('email')}
                        placeholder="Enter your e-mail"
                        variant={errors.email ? VARIANT.ERROR : VARIANT.DEFAULT}
                    />
                    {errors.email && <ErrorMessage>Invalid e-mail address</ErrorMessage>}
                </S.InputContainer>
                <S.ButtonContainer align="right">
                    <Button type="submit">Continue</Button>
                </S.ButtonContainer>
            </Form>
        </React.Fragment>
    )
}

export default FirstStep