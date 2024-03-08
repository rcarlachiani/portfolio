import { styled } from "styled-components";
import { theme } from "../theme/theme";

interface PropsContainerFlex {
    display?: string,
    position?: string,
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
    flexdirection?: string,
    flexdirectionmd?: string,
    flexdirectionlg?: string,
    flexwrap?: string,
    flexbasis?: string,
    flexbasissm?: string,
    flexbasismd?: string,
    flexbasisxxl?: string,
    gap?: string,
    gapsm?: string,
    gapmd?: string,
    gaplg?: string,
    gapxl?: string,
    rowgap?: string,
    rowgapsm?: string,
    rowgapmd?: string,
    rowgaplg?: string,
    rowgapxxl?: string,
    columngap?: string,
    columngapsm?: string,
    columngapxxl?: string,
    justifycontent?: string,
    alignitems?: string,
    alignitemsmd?: string,
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
    marginmd?: string,
    padding?: string,
    paddingsm?: string,
    paddingmd?: string,
    paddinglg?: string,
    paddingxxl?: string,
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
interface PropsSection {
    display?: string,
    justifycontent?: string,
}

interface PropsText {
    display?: string,
    gridcolumn?: string,
    gridrow?: string,
    fontSize?: string,
    fontsizesm?: string,
    fontsizemd?: string,
    fontsizelg?: string,
    fontsizexl?: string,
    fontsizexxl?: string,
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
    padding?: string,
    paddingsm?: string,
    paddingmd?: string,
    margin?: string,
    marginmd?: string,
    hovercolor?: string,
    hoverweight?: string,
    transition?: string,
    whitespace?: string,
    whitespacesm?: string,
    whitespacemd?: string,
    whitespacelg?: string,
    textoverflow?: string,
    background?: string,
    backgroundclip?: string,
    fillcolor?: string,
    maxwidth?: string,
}

export const ContainerFlex = styled.div<PropsContainerFlex>`
    display: ${(props) => props.display? props.display : 'flex'};
    position: ${(props) => props.position};
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    flex-direction: ${(props) => props.flexdirection};
    flex-wrap: ${(props) => props.flexwrap};
    flex-basis: ${(props) => props.flexbasis};
    gap: ${(props) => props.gap};
    row-gap: ${(props) => props.rowgap};
    column-gap: ${(props) => props.columngap};
    justify-content: ${(props) => props.justifycontent};
    align-items: ${(props) => props.alignitems};
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
        flex-basis: ${(props) => props.flexbasissm};
        gap: ${(props) => props.gapsm};
        row-gap: ${(props) => props.rowgapsm};
        column-gap: ${(props) => props.columngapsm};
        width: ${(props) => props.widthsm};
        height: ${(props) => props.heightsm};
        padding: ${(props) => props.paddingsm};
    }

    @media (${theme.breakpoints.md}) {
        flex-direction: ${(props) => props.flexdirectionmd};
        flex-basis: ${(props) => props.flexbasismd};
        align-items: ${(props) => props.alignitemsmd};
        gap: ${(props) => props.gapmd};
        row-gap: ${(props) => props.rowgapmd};
        margin: ${(props) => props.marginmd};
        padding: ${(props) => props.paddingmd};
        width: ${(props) => props.widthmd};
        height: ${(props) => props.heightmd};
    }

    @media (${theme.breakpoints.lg}) {
        flex-direction: ${(props) => props.flexdirectionlg};
        gap: ${(props) => props.gaplg};
        row-gap: ${(props) => props.rowgaplg};
        padding: ${(props) => props.paddinglg};
        width: ${(props) => props.widthlg};
        height: ${(props) => props.heightlg};
    }

    @media (${theme.breakpoints.xl}) {
        gap: ${(props) => props.gapxl};
        width: ${(props) => props.widthxl};
        height: ${(props) => props.heightxl};
    }


    @media (${theme.breakpoints.xxl}) {
        flex-basis: ${(props) => props.flexbasisxxl};
        padding: ${(props) => props.paddingxxl};
        row-gap: ${(props) => props.rowgapxxl};
        column-gap: ${(props) => props.columngapxxl};
    }
`

export const Section = styled.section<PropsSection>`
    display: flex;
    width: inherit;
    height: inherit;
    position: relative;
    z-index: 1;
    justify-content: ${(props) => props.justifycontent ? props.justifycontent : 'center'};
    scroll-snap-align: center;
`

export const Text = styled.p<PropsText>`
    font-size: ${(props) => props.fontSize};
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
    }

    @media (${theme.breakpoints.md}) {
        font-size: ${(props) => props.fontsizemd};
        text-align: ${(props) => props.textalignmd};
        line-height: ${(props) => props.lineheightmd};
        margin: ${(props) => props.marginmd};
    }

    @media (${theme.breakpoints.lg}) {
        font-size: ${(props) => props.fontsizelg};
        text-align: ${(props) => props.textalignlg};
        line-height: ${(props) => props.lineheightlg};
    }

    @media (${theme.breakpoints.xl}) {
        font-size: ${(props) => props.fontsizexl};
        line-height: ${(props) => props.lineheightxl};
    }

    @media (${theme.breakpoints.xxl}) {
        font-size: ${(props) => props.fontsizexxl};
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
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.lineheight};
    color: ${(props) => props.color};
    text-align: ${(props) => props.textalign};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    white-space: ${(props) => props.whitespace};

    @media (${theme.breakpoints.sm}) {
        font-size: ${(props) => props.fontsizesm};
        text-align: ${(props) => props.textalignsm};
        padding: ${(props) => props.paddingsm};
        white-space: ${(props) => props.whitespacesm};
    }

    @media (${theme.breakpoints.md}) {
        font-size: ${(props) => props.fontsizemd};
        text-align: ${(props) => props.textalignmd};
        margin: ${(props) => props.marginmd};
        padding: ${(props) => props.paddingmd};
        white-space: ${(props) => props.whitespacemd};
    }

    @media (${theme.breakpoints.lg}) {
        font-size: ${(props) => props.fontsizelg};
        text-align: ${(props) => props.textalignlg};
        white-space: ${(props) => props.whitespacelg};
    }

    @media (${theme.breakpoints.xl}) {
        font-size: ${(props) => props.fontsizexl};
    }

    @media (${theme.breakpoints.xxl}) {
        font-size: ${(props) => props.fontsizexxl};
    }
`

export const Subtitle = styled.h2<PropsText>`
    display: ${(props) => props.display};
    background: ${(props) => props.background};
    -webkit-background-clip: ${(props) => props.backgroundclip && 'text'};
    -webkit-text-fill-color: ${(props) => props.fillcolor && 'transparent'};
    filter: ${(props) => props.filter};
    grid-column: ${(props) => props.gridcolumn};
    grid-row: ${(props) => props.gridrow};
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.lineheight};
    color: ${(props) => props.color};
    text-align: ${(props) => props.textalign};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    white-space: ${(props) => props.whitespace};
    

    @media (${theme.breakpoints.sm}) {
        font-size: ${(props) => props.fontsizesm};
        text-align: ${(props) => props.textalignsm};
        padding: ${(props) => props.paddingsm};
        white-space: ${(props) => props.whitespacesm};
    }

    @media (${theme.breakpoints.md}) {
        font-size: ${(props) => props.fontsizemd};
        text-align: ${(props) => props.textalignmd};
        margin: ${(props) => props.marginmd};
        padding: ${(props) => props.paddingmd};
        white-space: ${(props) => props.whitespacemd};
    }

    @media (${theme.breakpoints.lg}) {
        font-size: ${(props) => props.fontsizelg};
        text-align: ${(props) => props.textalignlg};
        white-space: ${(props) => props.whitespacelg};
    }

    @media (${theme.breakpoints.xl}) {
        font-size: ${(props) => props.fontsizexl};
    }

    @media (${theme.breakpoints.xxl}) {
        font-size: ${(props) => props.fontsizexxl};
    }
`

export const GradientBackground = styled.div`
    width: 100%;
    height: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    position: absolute;
    background: radial-gradient(circle, rgba(255,0,128,1) 0%, rgba(121,40,202,1) 100%);
    border-radius: 50%;
    opacity: 0.6;
    filter: blur(180px);
`

export const Link = styled.a`
    text-decoration: none;
`