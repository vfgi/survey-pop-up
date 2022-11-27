import styled from 'styled-components'


export enum VARIANT {
    DEFAULT,
    ERROR,
}

interface InputProps {
    variant?: VARIANT
    type: string
}
  
export const CheckBox = styled.input.attrs((): InputProps => ({
    type: "checkbox",
  }))`
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
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
    cursor: pointer;

    &::before{
        content: "";
        width: 0.65em;
        height: 0.65em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em ${props => props.theme.colors.primary};
        background-color: ${props => props.theme.colors.primary};
        transform-origin: bottom left;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }
    &:checked::before{
        transform: scale(1);
    }
`;