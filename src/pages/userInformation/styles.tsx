import styled from 'styled-components'

interface ButtonProps {
    align: string
}

export const Title = styled.p`
    font-size: 18px;
    font-weight: 600;
`

export const InputContainer = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
`

export const ButtonContainer = styled.div<ButtonProps>`
    width: 100%;
    display: flex;
    margin-top: ${props => props.theme.spacing.lg};
    margin-bottom: ${props => props.theme.spacing.lg};
    justify-content: ${props => props.align};
`

export const GenderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const GenderItem = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
    margin-bottom: ${props => props.theme.spacing.md};
    margin-top: ${props => props.theme.spacing.md};
`