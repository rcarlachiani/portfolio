import { styled } from "styled-components";
import { theme } from "../theme/theme";

interface PropsContainerFlex {
    display?: string,
    position?: string,
    top?: string,
    bottom?: string,
    flexdirection?: string,
    flexdirectiontablet?: string,
    flexdirectionmobile?: string,
    gap?: string,
    gapmobile?: string,
    justifycontent?: string,
    alignitems?: string,
    width?: string,
    height?: string,
    maxwidth?: string,
    maxheight?: string,
    margin?: string,
    padding?: string,
    marginmobile?: string,
    paddingmobile?: string,
    border?: string,
    backgroundcolor?: string,
}

interface PropsSection {
    display?: string,
    justifycontent?: string,
}

interface PropsText {
    fontSize?: string,
    fontsizetablet?: string,
    fontsizemobile?: string,
    lineheight?: string,
    color?: string,
    textalign?: string,
    textalignmobile?: string,
}

export const ContainerFlex = styled.div<PropsContainerFlex>`
    display: flex;
    position: ${(props) => props.position};
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    flex-direction: ${(props) => props.flexdirection};
    gap: ${(props) => props.gap};
    justify-content: ${(props) => props.justifycontent};
    align-items: ${(props) => props.alignitems};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    max-width: ${(props) => props.maxwidth};
    max-height: ${(props) => props.maxheight};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    border: ${(props) => props.border};
    background-color: ${(props) => props.backgroundcolor};

    @media (max-width: 992px) {
        flex-direction: ${(props) => props.flexdirectiontablet};
    }

    @media (max-width: 576px) {
        flex-direction: ${(props) => props.flexdirectionmobile};
        gap: unset;
        margin: ${(props) => props.marginmobile};
        padding: ${(props) => props.paddingmobile};
    }
`

export const Section = styled.section<PropsSection>`
    display: flex;
    position: relative;
    z-index: 1;
    justify-content: ${(props) => props.justifycontent ? props.justifycontent : 'center'};
`

export const Text = styled.p<PropsText>`
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.lineheight};
    color: ${(props) => props.color ? props.color : theme.colors.black};
    text-align: ${(props) => props.textalign};

    @media (max-width: 992px) {
        font-size: ${(props) => props.fontsizetablet};
    }

    @media (max-width: 576px) {
        font-size: ${(props) => props.fontsizemobile};
        text-align: ${(props) => props.textalignmobile};
    }
`

export const Title = styled.h1<PropsText>`
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.lineheight};
    color: ${(props) => props.color};
    text-align: ${(props) => props.textalign};

    @media (max-width: 992px) {
        font-size: ${(props) => props.fontsizetablet};
    }

    @media (max-width: 576px) {
        font-size: ${(props) => props.fontsizemobile};
        text-align: ${(props) => props.textalignmobile};
    }
`

export const Subtitle = styled.h2<PropsText>`
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.lineheight};
    color: ${(props) => props.color};
    text-align: ${(props) => props.textalign};

    @media (max-width: 992px) {
        font-size: ${(props) => props.fontsizetablet};
    }

    @media (max-width: 576px) {
        font-size: ${(props) => props.fontsizemobile};
        text-align: ${(props) => props.textalignmobile};
    }
`