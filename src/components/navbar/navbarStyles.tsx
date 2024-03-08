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
    background-color: hsla(242.2, 49.4%, 67.45%, 0.1);
    backdrop-filter: blur(6px);
    border-radius: 40px;
    box-shadow: 0px 4px 4px hsla(0deg, 0%, 0%, 0.1);
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
    justify-content: center;
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
`