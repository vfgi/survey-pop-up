import styled from 'styled-components'


export enum VARIANT {
    DEFAULT,
    ERROR,
}

interface InputProps {
    variant?: VARIANT
    margin?: boolean
}

export const InputContainer = styled.div<InputProps>`
    display: flex;
    max-width: 100%;
    flex-direction: column;
    margin-bottom: ${props => props.margin ? props.theme.spacing.lg : 0};
`

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

export const InputStyle = styled.input<InputProps>`
    background-color: transparent;
    border: none;
    max-width: 100%;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    padding: 0 5px 0 5px;
    height: 45px;

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