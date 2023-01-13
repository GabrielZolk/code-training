import styled from "styled-components";
import { myTheme } from "../Theme";
import ButtonStyled from "./Button";

// Tagged Function
export const Button = styled.button`
    background-color: ${(prop) => prop.backgroundColor ? prop.backgroundColor : 'pink'};
    width: 100px;
    height: ${({ theme }) => myTheme.sizes.xxl};

    &:hover {
    background-color: blue;
    }
`

export const Button2 = styled(ButtonStyled)`
    background-color: ${({theme}) => myTheme.colors.primary};
    width: 100px;
    height: 60px;
`