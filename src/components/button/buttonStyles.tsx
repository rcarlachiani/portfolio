import { styled } from "styled-components";
import { theme } from "../../theme/theme";

interface PropsButton {
    justifycontent?: string,
    alignitems?: string,
    width?: string,
    widthsm?: string,
    widthmd?: string,
    widthlg?: string,
    widthxl?: string,
    height?: string,
    heightsm?: string,
    heightmd?: string,
    heightlg?: string,
    heightxl?: string,
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
    width: ${(props) => props.width ? props.width : '53px'};
    height: ${(props) => props.height ? props.height : '20px'};
    max-width: ${(props) => props.maxwidth};
    max-height: ${(props) => props.maxheight};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    border: none;
    background: linear-gradient(310deg,#7928ca,#ff0080);
    border-radius: 40px;
    filter: ${theme.shadows.mainShadow};
    cursor: pointer;

    @media (${theme.breakpoints.sm}) {
        width: ${(props) => props.widthsm ? props.widthsm : '65px'};
        height: ${(props) => props.heightsm ? props.heightsm : '24px'};
    }

    @media (${theme.breakpoints.lg}) {
        width: ${(props) => props.widthlg ? props.widthlg : '80px'};
        height: ${(props) => props.heightlg ? props.heightlg : '28px'};
    }
`