import styled from 'styled-components'


export enum VARIANT {
    PRIMARY,
    SECONDARY,
    OUTLINED,
    ERROR
}

export enum SIZES {
    SMALL,
    MEDIUM,
    LARGE
}

interface ButtonProps {
    variant?: VARIANT
    size?: SIZES
}

export const Button = styled.button<ButtonProps>`
    cursor: pointer;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;

    &:hover {
        opacity: 0.8;
    }
    &:active {
    transform: translateY(2px);
    }

    ${props => {
        switch (props.size) {
            case SIZES.SMALL:
                return `
                width: 144px;
                height: 42px
            `;
            case SIZES.LARGE:
                return `
                width: 144px;
                height: 42px
            `;
            case SIZES.MEDIUM:
            default:
                return `
                width: 144px;
                height: 42px
            `;
        }
    }};
    ${props => {
        switch (props.variant) {
        case VARIANT.SECONDARY:
            return `
            color: ${props.theme.colors.secondary};
            background-color: ${props.theme.colors.secondary};
            &:hover {
                opacity: 0.9: 
            }
            `;
        case VARIANT.OUTLINED:
            return `
            border: 1px solid ${props.theme.colors.primary};
            color: ${props.theme.colors.primary};
            background-color: ${props.theme.colors.white};
            &:hover {
                opacity: 0.9: 
            }
        `;
        case VARIANT.ERROR:
            return `
            border: 1px solid ${props.theme.colors.secondary};
            color: ${props.theme.colors.secondary};
            background-color: ${props.theme.colors.white};
            &:hover {
                opacity: 0.9: 
            }
        `;
        case VARIANT.PRIMARY:
        default:
            return `
            color: ${props.theme.colors.white};
            background-color: ${props.theme.colors.primary};
            `;
        }
    }}
`;