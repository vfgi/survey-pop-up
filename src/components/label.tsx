import styled from 'styled-components'


export enum VARIANT {
    DEFAULT,
    ERROR,
}

interface InputProps {
    variant?: VARIANT
}

export const Label = styled.span<InputProps>`
    font-size: 16px;
    font-weight: 600;
    ${props => {
        switch (props.variant) {
        case VARIANT.ERROR:
            return `
            color: ${props.theme.colors.secondary};
        `;
        case VARIANT.DEFAULT:
        default:
            return `
            color: ${props.theme.colors.black};
            `;
        }
    }}
`
