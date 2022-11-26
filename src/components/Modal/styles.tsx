import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.opacityBlack};
    position: absolute;
    display: flex;
    justify-content: center;
    z-index: 999;
    align-items: center;
`

export const Modal = styled.div`
    min-width: 340px;
    min-height: 600px;
    background-color: ${props => props.theme.colors.white};
    position: relative;
`