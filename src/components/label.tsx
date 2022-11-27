import styled from 'styled-components'


export enum VARIANT {
    DEFAULT,
    ERROR,
    GRAY
}

interface InputProps {
    variant?: VARIANT
    margin?: boolean
}

export const Label = styled.span<InputProps>`
    font-size: 16px;
    font-weight: 600;
    margin-top: ${props => props.margin ? props.theme.spacing.lg : 0};
    ${props => {
        switch (props.variant) {
        case VARIANT.ERROR:
            return `
            color: ${props.theme.colors.secondary};
        `;
        case VARIANT.GRAY:
            return `
            color: ${props.theme.colors.gray};
            margin-left: ${props.theme.spacing.md}
        `;
        case VARIANT.DEFAULT:
        default:
            return `
            color: ${props.theme.colors.black};
            `;
        }
    }}
`
