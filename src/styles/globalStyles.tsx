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
    justifyself?: string,
    justifyselfmobile?: string,
    alignitems?: string,
    alignself?: string,
    alignselfmobile?: string,
    width?: string,
    height?: string,
    maxwidth?: string,
    maxheight?: string,
    margin?: string,
    padding?: string,
    marginmobile?: string,
    paddingmobile?: string,
    border?: string,
    borderradius?: string,
    backgroundcolor?: string,
    backgroundblur?: string,
    boxshadow?: string,
    overflowy?: string,
    overflowx?: string,
    overscrolly?: string,
    overscrollx?: string,
    scrollsnap?: string,
    scrollsnapalign?: string,
    cursor?: string,
}

interface PropsContainerGrid {
    templatecols?: string,
    templaterows?: string,
    templatecolstablet?: string,
    templaterowstablet?: string,
    templatecolsmobile?: string,
    templaterowsmobile?: string,
    gap?: string,
    gaptablet?: string,
    gapmobile?: string,
    position?: string,
    top?: string,
    bottom?: string,
    justifyitems?: string,
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
    overflowy?: string,
    overflowx?: string,
    overscrolly?: string,
    overscrollx?: string,
    scrollsnap?: string,
}

interface PropsSection {
    display?: string,
    justifycontent?: string,
}

interface PropsText {
    display?: string,
    gridcolumn?: string,
    gridrow?: string,
    fontSize?: string,
    fontsizetablet?: string,
    fontsizemobile?: string,
    lineheight?: string,
    color?: string,
    textalign?: string,
    textalignmobile?: string,
    alignself?: string,
    padding?: string,
    margin?: string,
}

export const ContainerFlex = styled.div<PropsContainerFlex>`
    display: ${(props) => props.display? props.display : 'flex'};
    position: ${(props) => props.position};
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    flex-direction: ${(props) => props.flexdirection};
    gap: ${(props) => props.gap};
    justify-content: ${(props) => props.justifycontent};
    justify-self: ${(props) => props.justifyself};
    align-items: ${(props) => props.alignitems};
    align-self: ${(props) => props.alignself};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    max-width: ${(props) => props.maxwidth};
    max-height: ${(props) => props.maxheight};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderradius};
    background-color: ${(props) => props.backgroundcolor};
    backdrop-filter: ${(props) => props.backgroundblur};
    box-shadow: ${(props) => props.boxshadow};
    cursor: ${(props) => props.cursor};
    overflow-y: ${(props) => props.overflowy};
    overflow-x: ${(props) => props.overflowx};
    overscroll-behavior-y: ${(props) => props.overscrolly};
    overscroll-behavior-x: ${(props) => props.overscrollx};
    scroll-snap-type: ${(props) => props.scrollsnap};
    scroll-snap-align: ${(props) => props.scrollsnapalign};
    scrollbar-width: none;
    ::-webkit-scrollbar{
      display: none;
    }

    @media (max-width: 992px) {
        flex-direction: ${(props) => props.flexdirectiontablet};
    }

    @media (max-width: 576px) {
        flex-direction: ${(props) => props.flexdirectionmobile};
        gap: unset;
        margin: ${(props) => props.marginmobile};
        padding: ${(props) => props.paddingmobile};
        justify-self: ${(props) => props.justifyselfmobile};
        align-self: ${(props) => props.alignselfmobile};
    }
`

export const ContainerGrid = styled.div<PropsContainerGrid>`
    display: grid;
    grid-template-columns: ${(props) => props.templatecols};
    grid-template-rows: ${(props) => props.templaterows};
    gap: ${(props) => props.gap};
    position: ${(props) => props.position};
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    justify-items: ${(props) => props.justifyitems};
    align-items: ${(props) => props.alignitems};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    max-width: ${(props) => props.maxwidth};
    max-height: ${(props) => props.maxheight};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    border: ${(props) => props.border};
    background-color: ${(props) => props.backgroundcolor};
    overflow-y: ${(props) => props.overflowy};
    overflow-x: ${(props) => props.overflowx};
    overscroll-behavior-y: ${(props) => props.overscrolly};
    overscroll-behavior-x: ${(props) => props.overscrollx};
    scroll-snap-type: ${(props) => props.scrollsnap};
    scrollbar-width: none;
    ::-webkit-scrollbar{
      display: none;
    }

    @media (max-width: 992px) {
        grid-template-columns: ${(props) => props.templatecolstablet};
        grid-template-rows: ${(props) => props.templaterowstablet};
        gap: ${(props) => props.gaptablet};
    }

    @media (max-width: 576px) {
        grid-template-columns: ${(props) => props.templatecolsmobile};
        grid-template-rows: ${(props) => props.templaterowsmobile};
        gap: ${(props) => props.gapmobile};
        margin: ${(props) => props.marginmobile};
        padding: ${(props) => props.paddingmobile};
    }
`

export const Section = styled.section<PropsSection>`
    display: flex;
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 1;
    justify-content: ${(props) => props.justifycontent ? props.justifycontent : 'center'};
    scroll-snap-align: center;
`

export const Text = styled.p<PropsText>`
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.lineheight};
    color: ${(props) => props.color ? props.color : theme.colors.black};
    text-align: ${(props) => props.textalign};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};

    @media (max-width: 992px) {
        font-size: ${(props) => props.fontsizetablet};
    }

    @media (max-width: 576px) {
        font-size: ${(props) => props.fontsizemobile};
        text-align: ${(props) => props.textalignmobile};
    }
`

export const Title = styled.h1<PropsText>`
    display: ${(props) => props.display};
    grid-column: ${(props) => props.gridcolumn};
    grid-row: ${(props) => props.gridrow};
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.lineheight};
    color: ${(props) => props.color};
    text-align: ${(props) => props.textalign};
    align-self: ${(props) => props.alignself};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};

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