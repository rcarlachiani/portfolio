import { styled } from "styled-components";
import { theme } from "../theme/theme";

interface PropsContainerFlex {
    display?: string,
    position?: string,
    top?: string,
    bottom?: string,
    flexdirection?: string,
    flexdirectionsm?: string,
    flexdirectionmd?: string,
    flexdirectionlg?: string,
    flexdirectionxl?: string,
    gap?: string,
    gapsm?: string,
    gapmd?: string,
    gaplg?: string,
    gapxl?: string,
    justifycontent?: string,
    justifycontentsm?: string,
    justifycontentmd?: string,
    justifycontentlg?: string,
    justifycontentxl?: string,
    justifyself?: string,
    justifyselfsm?: string,
    justifyselfmd?: string,
    justifyselflg?: string,
    justifyselfxl?: string,
    alignitems?: string,
    alignitemssm?: string,
    alignitemsmd?: string,
    alignitemslg?: string,
    alignitemsxl?: string,
    alignself?: string,
    alignselfsm?: string,
    alignselfmd?: string,
    alignselflg?: string,
    alignselfxl?: string,
    width?: string,
    height?: string,
    heightsm?: string,
    heightmd?: string,
    heightlg?: string,
    heightxl?: string,
    maxwidth?: string,
    maxwidthsm?: string,
    maxwidthmd?: string,
    maxwidthlg?: string,
    maxwidthxl?: string,
    maxheight?: string,
    margin?: string,
    marginsm?: string,
    marginmd?: string,
    marginlg?: string,
    marginxl?: string,
    padding?: string,
    paddingsm?: string,
    paddingmd?: string,
    paddinglg?: string,
    paddingxl?: string,
    border?: string,
    borderradius?: string,
    backgroundcolor?: string,
    backgroundblur?: string,
    filter?: string,
    boxshadow?: string,
    overflowy?: string,
    overflowx?: string,
    overscrolly?: string,
    overscrollx?: string,
    scrollsnap?: string,
    scrollsnapalign?: string,
    cursor?: string,
    zindex?: number,
}

interface PropsContainerGrid {
    templatecols?: string,
    templatecolssm?: string,
    templatecolsmd?: string,
    templatecolslg?: string,
    templatecolsxl?: string,
    templaterows?: string,
    templaterowssm?: string,
    templaterowsmd?: string,
    templaterowslg?: string,
    templaterowsxl?: string,
    gap?: string,
    gapsm?: string,
    gapmd?: string,
    gaplg?: string,
    gapxl?: string,
    position?: string,
    top?: string,
    bottom?: string,
    justifyitems?: string,
    justifycontent?: string,
    alignitems?: string,
    width?: string,
    height?: string,
    maxwidth?: string,
    maxheight?: string,
    margin?: string,
    marginsm?: string,
    marginmd?: string,
    marginlg?: string,
    marginxl?: string,
    padding?: string,
    paddingsm?: string,
    paddingmd?: string,
    paddinglg?: string,
    paddingxl?: string,
    border?: string,
    backgroundcolor?: string,
    filter?: string,
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
    fontsize?: string,
    fontsizesm?: string,
    fontsizemd?: string,
    fontsizelg?: string,
    fontsizexl?: string,
    lineheight?: string,
    lineheightsm?: string,
    lineheightmd?: string,
    lineheightlg?: string,
    lineheightxl?: string,
    color?: string,
    filter?: string,
    textalign?: string,
    textalignsm?: string,
    textalignmd?: string,
    textalignlg?: string,
    alignself?: string,
    justifyself?: string,
    padding?: string,
    paddingsm?: string,
    paddingmd?: string,
    paddinglg?: string,
    margin?: string,
    marginsm?: string,
    marginmd?: string,
    marginlg?: string,
    hovercolor?: string,
    hoverweight?: string,
    transition?: string,
    whitespace?: string,
    textoverflow?: string,
    background?: string,
    backgroundclip?: boolean,
    fillcolor?: boolean,
    maxwidth?: string,
    maxwidthsm?: string,
    maxwidthmd?: string,
    maxwidthlg?: string,
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
    filter: ${(props) => props.filter};
    box-shadow: ${(props) => props.boxshadow};
    cursor: ${(props) => props.cursor};
    z-index: ${(props) => props.zindex};
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

    @media (${theme.breakpoints.sm}) {
        flex-direction: ${(props) => props.flexdirectionsm};
        align-items: ${(props) => props.alignitemssm};
        align-self: ${(props) => props.alignselfsm};
        max-width: ${(props) => props.maxwidthsm};
        gap: ${(props) => props.gapsm};
        margin: ${(props) => props.marginsm};
        height: ${(props) => props.heightsm};
        padding: ${(props) => props.paddingsm};
    }

    @media (${theme.breakpoints.md}) {
        flex-direction: ${(props) => props.flexdirectionmd};
        align-items: ${(props) => props.alignitemsmd};
        gap: ${(props) => props.gapmd};
        margin: ${(props) => props.marginmd};
        padding: ${(props) => props.paddingmd};
        justify-self: ${(props) => props.justifyselfmd};
        align-self: ${(props) => props.alignselfmd};
        height: ${(props) => props.heightmd};
        max-width: ${(props) => props.maxwidthmd};
    }

    @media (${theme.breakpoints.lg}) {
        flex-direction: ${(props) => props.flexdirectionlg};
        align-items: ${(props) => props.alignitemslg};
        gap: ${(props) => props.gaplg};
        margin: ${(props) => props.marginlg};
        padding: ${(props) => props.paddinglg};
        justify-self: ${(props) => props.justifyselflg};
        align-self: ${(props) => props.alignselflg};
        max-width: ${(props) => props.maxwidthlg};
        height: ${(props) => props.heightlg};
    }

    @media (${theme.breakpoints.xl}) {
        margin: ${(props) => props.marginxl};
        padding: ${(props) => props.paddingxl};
        gap: ${(props) => props.gapxl};
        height: ${(props) => props.heightxl};
        max-width: ${(props) => props.maxwidthxl};
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
    justify-content: ${(props) => props.justifycontent};
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
    filter: ${(props => props.filter)};
    overflow-y: ${(props) => props.overflowy};
    overflow-x: ${(props) => props.overflowx};
    overscroll-behavior-y: ${(props) => props.overscrolly};
    overscroll-behavior-x: ${(props) => props.overscrollx};
    scroll-snap-type: ${(props) => props.scrollsnap};
    scrollbar-width: none;
    ::-webkit-scrollbar{
      display: none;
    }

    @media (${theme.breakpoints.sm}) {
        grid-template-columns: ${(props) => props.templatecolssm};
        grid-template-rows: ${(props) => props.templaterowssm};
        gap: ${(props) => props.gapsm};
        padding: ${(props) => props.paddingsm};
    }

    @media (${theme.breakpoints.md}) {
        grid-template-columns: ${(props) => props.templatecolsmd};
        grid-template-rows: ${(props) => props.templaterowsmd};
        gap: ${(props) => props.gapmd};
        padding: ${(props) => props.paddingmd};
    }

    @media (${theme.breakpoints.lg}) {
        grid-template-columns: ${(props) => props.templatecolslg};
        grid-template-rows: ${(props) => props.templaterowslg};
        gap: ${(props) => props.gaplg};
        margin: ${(props) => props.marginlg};
        padding: ${(props) => props.paddinglg};
    }

    @media (${theme.breakpoints.xl}) {
        grid-template-columns: ${(props) => props.templatecolsxl};
        grid-template-rows: ${(props) => props.templaterowsxl};
        gap: ${(props) => props.gapxl};
        margin: ${(props) => props.marginxl};
        padding: ${(props) => props.paddingxl};
    }
`

export const Section = styled.section<PropsSection>`
    display: flex;
    width: inherit;
    height: 100vh;
    position: relative;
    z-index: 1;
    justify-content: ${(props) => props.justifycontent ? props.justifycontent : 'center'};
    scroll-snap-align: center;
`

export const Text = styled.p<PropsText>`
    font-size: ${(props) => props.fontsize};
    line-height: ${(props) => props.lineheight};
    color: ${(props) => props.color ? props.color : theme.colors.black};
    filter: ${(props) => props.filter};
    text-align: ${(props) => props.textalign};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    transition: ${(props) => props.transition};
    white-space: ${(props) => props.whitespace};
    text-overflow: ${(props) => props.textoverflow};
    max-width: ${(props) => props.maxwidth};

    &:hover {
        color: ${(props) => props.hovercolor};
        font-weight: ${(props) => props.hoverweight};
    }

    @media (${theme.breakpoints.sm}) {
        font-size: ${(props) => props.fontsizesm};
        text-align: ${(props) => props.textalignsm};
        line-height: ${(props) => props.lineheightsm};
        max-width: ${(props) => props.maxwidthsm};
        margin: ${(props) => props.marginsm};
    }

    @media (${theme.breakpoints.md}) {
        font-size: ${(props) => props.fontsizemd};
        text-align: ${(props) => props.textalignmd};
        line-height: ${(props) => props.lineheightmd};
        max-width: ${(props) => props.maxwidthmd};
        margin: ${(props) => props.marginmd};
    }

    @media (${theme.breakpoints.lg}) {
        font-size: ${(props) => props.fontsizelg};
        text-align: ${(props) => props.textalignlg};
        margin: ${(props) => props.marginlg};
        line-height: ${(props) => props.lineheightlg};
        max-width: ${(props) => props.maxwidthlg};
    }

    @media (${theme.breakpoints.xl}) {
        font-size: ${(props) => props.fontsizexl};
        line-height: ${(props) => props.lineheightxl};
    }
`

export const Title = styled.h1<PropsText>`
    display: ${(props) => props.display};
    background: ${(props) => props.background};
    -webkit-background-clip: ${(props) => props.backgroundclip && 'text'};
    -webkit-text-fill-color: ${(props) => props.fillcolor && 'transparent'};
    filter: ${(props) => props.filter};
    grid-column: ${(props) => props.gridcolumn};
    grid-row: ${(props) => props.gridrow};
    font-size: ${(props) => props.fontsize};
    line-height: ${(props) => props.lineheight};
    color: ${(props) => props.color};
    text-align: ${(props) => props.textalign};
    align-self: ${(props) => props.alignself};
    justify-self: ${(props) => props.justifyself};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};

    @media (${theme.breakpoints.sm}) {
        font-size: ${(props) => props.fontsizesm};
        text-align: ${(props) => props.textalignsm};
        margin: ${(props) => props.marginsm};
        padding: ${(props) => props.paddingsm};
    }

    @media (${theme.breakpoints.md}) {
        font-size: ${(props) => props.fontsizemd};
        text-align: ${(props) => props.textalignmd};
        margin: ${(props) => props.marginmd};
        padding: ${(props) => props.paddingmd};
    }

    @media (${theme.breakpoints.lg}) {
        font-size: ${(props) => props.fontsizelg};
        text-align: ${(props) => props.textalignlg};
        margin: ${(props) => props.marginlg};
        padding: ${(props) => props.paddinglg};
    }

    @media (${theme.breakpoints.xl}) {
        font-size: ${(props) => props.fontsizexl};
    }
`

export const Subtitle = styled.h2<PropsText>`
    font-size: ${(props) => props.fontsize};
    line-height: ${(props) => props.lineheight};
    color: ${(props) => props.color};
    filter: ${(props) => props.filter};
    text-align: ${(props) => props.textalign};
    margin: ${(props) => props.margin};

    @media (${theme.breakpoints.sm}) {
        font-size: ${(props) => props.fontsizesm};
        margin: ${(props) => props.marginsm};
    }

    @media (${theme.breakpoints.lg}) {
        font-size: ${(props) => props.fontsizelg};
        text-align: ${(props) => props.textalignlg};
        margin: ${(props) => props.marginlg};
    }
`