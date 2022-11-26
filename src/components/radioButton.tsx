import styled from 'styled-components'


export enum VARIANT {
    DEFAULT,
    ERROR,
}

interface InputProps {
    variant?: VARIANT
    type: string
}
  
export const RadioButton = styled.input.attrs((): InputProps => ({
    type: "radio",
  }))`
    display: grid;
    place-content: center;
    appearance: none;
    background-color: ${props => props.theme.colors.white};
    margin: 0;
    font: inherit;
    ${props => {
        switch (props.variant) {
        case VARIANT.ERROR:
            return `
            border: 1px solid ${props.theme.colors.secondary};
            color: ${props.theme.colors.secondary};
        `;
        case VARIANT.DEFAULT:
        default:
            return `
            border: 1px solid ${props.theme.colors.primary};
            color: ${props.theme.colors.opacityBlack};
            `;
        }
    }}
    width: 1.15em;
    height: 1.15em;
    border-radius: 50%;
    transform: translateY(-0.075em);
    cursor: pointer;
    &::before{
        content: "";
        width: 0.65em;
        height: 0.65em;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em ${props => props.theme.colors.primary};
    }
    &:checked::before{
        transform: scale(1);
    }
`;