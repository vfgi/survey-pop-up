import styled from 'styled-components'


export enum VARIANT {
    DEFAULT,
    ERROR,
}

interface InputProps {
    variant?: VARIANT
    margin?: boolean
}

export const Select = styled.select<InputProps>`
    background-color: transparent;
    border: none;
    max-width: 100%;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    padding: 0 5px 0 5px;
    height: 35px;
    margin-bottom: ${props => props.margin ? props.theme.spacing.lg : ''};
    
    &::placeholder{
        color: ${props => props.theme.colors.gray};
    }

    ${props => {
        switch (props.variant) {
        case VARIANT.ERROR:
            return `
            border-bottom: 1px solid ${props.theme.colors.secondary};
            color: ${props.theme.colors.secondary};
        `;
        case VARIANT.DEFAULT:
        default:
            return `
            border-bottom: 1px solid ${props.theme.colors.primary};
            color: ${props.theme.colors.opacityBlack};
            `;
        }
    }}
`;