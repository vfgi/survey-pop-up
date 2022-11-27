import styled from 'styled-components'

interface ButtonProps {
    align: string
}
interface ResumeProps {
    grid?: boolean
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
export const Item = styled.div`
    width: 45%;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
    margin-bottom: ${props => props.theme.spacing.md};
    margin-top: ${props => props.theme.spacing.md};
`

export const CheckContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

export const InfoContainer = styled.div<ResumeProps>`
    width: 100%;
    ${props => props.grid ? 'display: grid; grid-gap: 0.5rem' : 'display: flex;'}

`

export const DoubleContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`