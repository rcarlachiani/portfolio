import { styled } from "styled-components";
import { theme } from "../../theme/theme";

interface PropsButton {
    justifycontent?: string,
    alignitems?: string,
    width?: string,
    height?: string,
    maxwidth?: string,
    maxheight?: string,
    margin?: string,
    padding?: string,
    border?: string,
    backgroundcolor?: string,
}

export const ButtonGradient = styled.button<PropsButton>`
    display: flex;
    justify-content: ${(props) => props.justifycontent};
    align-items: ${(props) => props.alignitems};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    max-width: ${(props) => props.maxwidth};
    max-height: ${(props) => props.maxheight};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    border: none;
    background: linear-gradient(310deg,#7928ca,#ff0080);
    border-radius: 40px;
    filter: ${theme.shadows.mainShadow};
    cursor: pointer;
`