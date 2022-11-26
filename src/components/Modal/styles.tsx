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
    border-radius: 10px;
    min-width: 340px;
    background-color: ${props => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`