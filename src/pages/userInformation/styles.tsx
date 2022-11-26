import styled from 'styled-components'

export const Title = styled.p`
    font-size: 18px;
    font-weight: 600;
`

export const InputContainer = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    padding: ${props => props.theme.spacing.lg};
    flex-direction: column;
`

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`