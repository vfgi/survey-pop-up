import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.opacityBlack};
    position: absolute;
    z-index: 999;
`