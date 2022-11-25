import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 80px;
    background-color: ${props => props.theme.colors.white};
    border-top: 1px solid ${props => props.theme.colors.primary};
    position: absolute;
    bottom: 0;
`