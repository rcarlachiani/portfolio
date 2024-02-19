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
    flexwrap?: string,
    flexbasis?: string,
    flexbasissm?: string,
    flexbasismd?: string,
    flexbasislg?: string,
    flexbasisxl?: string,
    flexbasisxxl?: string,
    gap?: string,
    gapsm?: string,
    gapmd?: string,
    gaplg?: string,
    gapxl?: string,
    gapxxl?: string,
    rowgap?: string,
    rowgapsm?: string,
    rowgapmd?: string,
    rowgaplg?: string,
    rowgapxl?: string,
    rowgapxxl?: string,
    columngap?: string,
    columngapsm?: string,
    columngapmd?: string,
    columngaplg?: string,
    columngapxl?: string,
    columngapxxl?: string,
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
    widthsm?: string,
    widthmd?: string,
    widthlg?: string,
    widthxl?: string,
    widthxxl?: string,
    height?: string,
    heightsm?: string,
    heightmd?: string,
    heightlg?: string,
    heightxl?: string,
    heightxxl?: string,
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
    alignself?: string,
    alignselfsm?: string,
    alignselfmd?: string,
    alignselflg?: string,
    alignselfxl?: string,
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
    whitespacesm?: string,
    whitespacemd?: string,
    whitespacelg?: string,
    textoverflow?: string,
    background?: string,
    backgroundclip?: string,
    fillcolor?: string,
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
    flex-wrap: ${(props) => props.flexwrap};
    flex-basis: ${(props) => props.flexbasis};
    gap: ${(props) => props.gap};
    row-gap: ${(props) => props.rowgap};
    column-gap: ${(props) => props.columngap};
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
        flex-basis: ${(props) => props.flexbasissm};
        justify-content: ${(props) => props.justifycontentsm};
        align-items: ${(props) => props.alignitemssm};
        align-self: ${(props) => props.alignselfsm};
        max-width: ${(props) => props.maxwidthsm};
        gap: ${(props) => props.gapsm};
        row-gap: ${(props) => props.rowgapsm};
        column-gap: ${(props) => props.columngapsm};
        margin: ${(props) => props.marginsm};
        width: ${(props) => props.widthsm};
        height: ${(props) => props.heightsm};
        padding: ${(props) => props.paddingsm};
    }

    @media (${theme.breakpoints.md}) {
        flex-direction: ${(props) => props.flexdirectionmd};
        flex-basis: ${(props) => props.flexbasismd};
        justify-content: ${(props) => props.justifycontentmd};
        align-items: ${(props) => props.alignitemsmd};
        gap: ${(props) => props.gapmd};
        row-gap: ${(props) => props.rowgapmd};
        column-gap: ${(props) => props.columngapmd};
        margin: ${(props) => props.marginmd};
        padding: ${(props) => props.paddingmd};
        justify-self: ${(props) => props.justifyselfmd};
        align-self: ${(props) => props.alignselfmd};
        width: ${(props) => props.widthmd};
        height: ${(props) => props.heightmd};
        max-width: ${(props) => props.maxwidthmd};
    }

    @media (${theme.breakpoints.lg}) {
        flex-direction: ${(props) => props.flexdirectionlg};
        flex-basis: ${(props) => props.flexbasislg};
        justify-content: ${(props) => props.justifycontentlg};
        align-items: ${(props) => props.alignitemslg};
        gap: ${(props) => props.gaplg};
        row-gap: ${(props) => props.rowgaplg};
        column-gap: ${(props) => props.columngaplg};
        margin: ${(props) => props.marginlg};
        padding: ${(props) => props.paddinglg};
        justify-self: ${(props) => props.justifyselflg};
        align-self: ${(props) => props.alignselflg};
        max-width: ${(props) => props.maxwidthlg};
        width: ${(props) => props.widthlg};
        height: ${(props) => props.heightlg};
    }

    @media (${theme.breakpoints.xl}) {
        justify-content: ${(props) => props.justifycontentxl};
        flex-basis: ${(props) => props.flexbasisxl};
        margin: ${(props) => props.marginxl};
        padding: ${(props) => props.paddingxl};
        gap: ${(props) => props.gapxl};
        row-gap: ${(props) => props.rowgapxl};
        column-gap: ${(props) => props.columngapxl};
        width: ${(props) => props.widthxl};
        height: ${(props) => props.heightxl};
        max-width: ${(props) => props.maxwidthxl};
    }


    @media (${theme.breakpoints.xxl}) {
        flex-basis: ${(props) => props.flexbasisxxl};
        width: ${(props) => props.widthxxl};
        height: ${(props) => props.heightxxl};
        padding: ${(props) => props.paddingxxl};
        gap: ${(props) => props.gapxxl};
        row-gap: ${(props) => props.rowgapxxl};
        column-gap: ${(props) => props.columngapxxl};
    }
`

export const Section = styled.section<PropsSection>`
    display: flex;
    width: inherit;
    height: 100%;
    position: relative;
    z-index: 1;
    justify-content: ${(props) => props.justifycontent ? props.justifycontent : 'center'};
    scroll-snap-align: start;
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
    align-self: ${(props) => props.alignself};
    justify-self: ${(props) => props.justifyself};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    white-space: ${(props) => props.whitespace};

    @media (${theme.breakpoints.sm}) {
        font-size: ${(props) => props.fontsizesm};
        text-align: ${(props) => props.textalignsm};
        margin: ${(props) => props.marginsm};
        padding: ${(props) => props.paddingsm};
        white-space: ${(props) => props.whitespacesm};
        align-self: ${(props) => props.alignselfsm};
    }

    @media (${theme.breakpoints.md}) {
        font-size: ${(props) => props.fontsizemd};
        text-align: ${(props) => props.textalignmd};
        margin: ${(props) => props.marginmd};
        padding: ${(props) => props.paddingmd};
        white-space: ${(props) => props.whitespacemd};
        align-self: ${(props) => props.alignselfmd};
    }

    @media (${theme.breakpoints.lg}) {
        font-size: ${(props) => props.fontsizelg};
        text-align: ${(props) => props.textalignlg};
        margin: ${(props) => props.marginlg};
        padding: ${(props) => props.paddinglg};
        white-space: ${(props) => props.whitespacelg};
        align-self: ${(props) => props.alignselflg};
    }

    @media (${theme.breakpoints.xl}) {
        font-size: ${(props) => props.fontsizexl};
        align-self: ${(props) => props.alignselfxl};
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
    align-self: ${(props) => props.alignself};
    justify-self: ${(props) => props.justifyself};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    white-space: ${(props) => props.whitespace};
    

    @media (${theme.breakpoints.sm}) {
        font-size: ${(props) => props.fontsizesm};
        text-align: ${(props) => props.textalignsm};
        margin: ${(props) => props.marginsm};
        padding: ${(props) => props.paddingsm};
        white-space: ${(props) => props.whitespacesm};
        align-self: ${(props) => props.alignselfsm};
    }

    @media (${theme.breakpoints.md}) {
        font-size: ${(props) => props.fontsizemd};
        text-align: ${(props) => props.textalignmd};
        margin: ${(props) => props.marginmd};
        padding: ${(props) => props.paddingmd};
        white-space: ${(props) => props.whitespacemd};
        align-self: ${(props) => props.alignselfmd};
    }

    @media (${theme.breakpoints.lg}) {
        font-size: ${(props) => props.fontsizelg};
        text-align: ${(props) => props.textalignlg};
        margin: ${(props) => props.marginlg};
        padding: ${(props) => props.paddinglg};
        white-space: ${(props) => props.whitespacelg};
        align-self: ${(props) => props.alignselflg};
    }

    @media (${theme.breakpoints.xl}) {
        font-size: ${(props) => props.fontsizexl};
        align-self: ${(props) => props.alignselfxl};
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