import styled from 'styled-components'

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
    padding-bottom: ${props => props.theme.spacing.md};
`