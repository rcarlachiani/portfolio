import { styled } from "styled-components";

interface PropsNavbar {
    display?: string,
    flexdirection?: string,
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

interface PropsNavbarItem {
    flexdirection?: string,
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
    color?: string,
}

interface PropsA {
    margin?: string,
    padding?: string,
}

export const Navbar = styled.div<PropsNavbar>`
    display: flex;
    position: absolute;
    z-index: 3;
    flex-direction: ${(props) => props.flexdirection};
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
`
export const NavbarItem = styled.div<PropsNavbarItem>`
    display: flex;
    flex-direction: ${(props) => props.flexdirection};
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
    color: ${(props) => props.color};
    cursor: pointer;
`

export const NavbarLink = styled.a<PropsA>`
    display: flex;
    width: 100%;
    height: fit-content;
    margin: ${(props) => props.margin ? props.margin : '0px 5px 0px 5px'};
    padding: ${(props) => props.padding ? props.padding : '0px 10px 0px 10px'};
`


