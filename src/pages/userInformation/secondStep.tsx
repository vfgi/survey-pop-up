import React, { useEffect } from "react";
import { Button, VARIANT } from "../../components/Button";
import { useDispatch } from 'react-redux'

import { changeStep } from "../../redux/reducers/steps";

import * as S from './styles'
import { Select, VARIANT as SELECT } from "../../components/select";
import { Form } from "../../components/form";
import { useForm } from "react-hook-form";
import { Label } from "../../components/label";
import { RadioButton } from "../../components/radioButton";
import { ErrorMessage } from "../../components/errorMessage";

interface FormProps {
    age: string
    gender: string
}

const SecondStep = () => {
    const dispatch = useDispatch()  
    const onSubmit = (data: FormProps) => {
        localStorage.setItem('age', data.age);
        localStorage.setItem('gender', data.gender);
        localStorage.setItem('step', '3');
        dispatch(changeStep(3))
    };

    const useFormInstance = useForm<FormProps>({
        defaultValues: {
          age: localStorage.getItem('age') || '',
          gender: localStorage.getItem('gender') || '',
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
        register('age', { required: true })
        register('gender', { required: true })
    }, [register])

    let ageOptions = []

    for(let i = 5; i < 90; i++) {
        ageOptions.push(i)
    }

    const genders = ['male', 'female', 'not-informed']
    
    return (
        <React.Fragment>
            <Form role="secondStep" onSubmit={handleSubmit(onSubmit)}>
                <S.InputContainer>
                    <Label>Age:</Label>
                    <Select 
                        onChange={(e) => {
                            setValue('age', e.target.value)
                            clearErrors('age')
                        }}
                        defaultValue={watch('age') || 'option'}
                        variant={errors.age ? SELECT.ERROR : SELECT.DEFAULT}
                    >
                        <option disabled value="option">Select your age</option>
                        {ageOptions.map((age, index) => 
                            <option value={age} key={index}>{age} years old</option>)}
                    </Select>
                    {errors.age && <ErrorMessage>Please select you age</ErrorMessage>}
                </S.InputContainer>
                <S.GenderContainer>
                    <Label margin>Select your gender</Label>
                        {genders.map((gender, index) => 
                            <S.Item key={index}>
                                <RadioButton 
                                    value={gender} 
                                    onChange={e => {
                                        setValue('gender', e.target.value)
                                        clearErrors('gender')
                                    }} 
                                    variant={errors.gender ? SELECT.ERROR : SELECT.DEFAULT}
                                    checked={watch('gender') === gender}
                                />
                                <Label variant={errors.gender ? SELECT.ERROR : SELECT.DEFAULT}>{gender}</Label>
                            </S.Item>
                        )}
                    {errors.gender && <ErrorMessage>Please select your gender</ErrorMessage>}
                </S.GenderContainer>
                <S.ButtonContainer align="space-between">
                    <Button variant={VARIANT.OUTLINED} onClick={() => dispatch(changeStep(1))}>Back</Button>
                    <Button type="submit">Continue</Button>
                </S.ButtonContainer>
            </Form>
        </React.Fragment>
    )
}

export default SecondStep