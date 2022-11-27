import React, { useEffect } from "react";
import { Button, VARIANT } from "../../components/Button";
import { useDispatch } from 'react-redux'

import { changeStep } from "../../redux/reducers/steps";

import * as S from './styles'
import { Form } from "../../components/form";
import { useForm } from "react-hook-form";
import { Label } from "../../components/label";
import { ErrorMessage } from "../../components/errorMessage";
import { Input, VARIANT as INPUTVAR } from "../../components/input";
import { CheckBox } from "../../components/checkBox";

interface FormProps {
    book: string
    colors: string[]
}

function ThirdStep() {
    const dispatch = useDispatch()  
    const onSubmit = (data: FormProps) => {
        localStorage.setItem('book', data.book);
        localStorage.setItem("colors", JSON.stringify(data.colors))
        localStorage.setItem('step', '4');
        dispatch(changeStep(4))
    };

    const useFormInstance = useForm<FormProps>({
        defaultValues: {
          book: localStorage.getItem('book') || '',
          colors: localStorage.colors ? JSON.parse(localStorage.colors) : [],
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
        register('book', { required: true })
        register('colors', { required: true })
    }, [register])

    const colors = ['Blue', 'Green', 'Red', 'Black', 'Yellow', 'Pink']
    
    return (
        <React.Fragment>
            <Form role="thirdStep" onSubmit={handleSubmit(onSubmit)}>
                <S.InputContainer>
                    <Label>Favorite Book:</Label>
                    <Input
                        onChange={(e) => {
                            setValue('book', e.target.value)
                            clearErrors('book')
                        }}
                        placeholder="Favorite book title" 
                        value={watch('book')}
                        variant={errors.book ? INPUTVAR.ERROR : INPUTVAR.DEFAULT}
                    />
                    {errors.book && <ErrorMessage>Inform your favorite book</ErrorMessage>}
                </S.InputContainer>
                <S.GenderContainer>
                    <Label margin>Select your favorite colors</Label>
                    <S.CheckContainer>
                            {colors.map((color, index) => 
                                <S.Item key={index}>
                                    <CheckBox 
                                        value={color}
                                        {...register("colors")}
                                        variant={errors.colors ? INPUTVAR.ERROR : INPUTVAR.DEFAULT}
                                    />
                                    <Label variant={errors.colors ? INPUTVAR.ERROR : INPUTVAR.DEFAULT}>{color}</Label>
                                </S.Item>
                            )}
                    </S.CheckContainer>
                    {errors.colors && <ErrorMessage>Please select at least one color</ErrorMessage>}
                </S.GenderContainer>

                <S.ButtonContainer align="space-between">
                    <Button variant={VARIANT.OUTLINED} onClick={() => dispatch(changeStep(2))}>Back</Button>
                    <Button type="submit">Continue</Button>
                </S.ButtonContainer>
            </Form>
        </React.Fragment>
    )
}

export default ThirdStep