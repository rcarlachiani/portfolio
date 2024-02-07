import { HtmlIcon } from "../icons/html5";
import { CssIcon } from "../icons/css3";
import { SassIcon } from "../icons/sass";
import { BsIcon } from "../icons/bootstrap";
import { TailIcon } from "../icons/tailwind";
import { ChakraIcon } from "../icons/chakraui";
import { JsIcon } from "../icons/javascript";
import { TsIcon } from "../icons/typescript";
import { ReactIcon } from "../icons/react";
import { NextIcon } from "../icons/nextjs";
import { StyledIcon } from "../icons/styled-components";
import { HsIcon } from "../icons/handlebars";
import { useContext } from "react";
import { DeviceContext } from "../../context/context";


export const IconsProjects = () => {
    const { isMobile } = useContext(DeviceContext);
    return [
        <HtmlIcon key='HTML5' width={isMobile ? '4vw' : '3vw'} />, 
        <CssIcon key='CSS3' width={isMobile ? '4vw' : '3vw'} />, 
        <SassIcon key='Sass' width={isMobile ? '4vw' : '3vw'} />, 
        <BsIcon key='Bootstrap' width={isMobile ? '4vw' : '3vw'} />, 
        <TailIcon key='TailwindCSS' width={isMobile ? '4vw' : '3vw'} />, 
        <ChakraIcon key='ChakraUI' width={isMobile ? '4vw' : '3vw'} />,
        <JsIcon key='Javascript' width={isMobile ? '4vw' : '3vw'} />,
        <TsIcon key='Typescript' width={isMobile ? '4vw' : '3vw'} />, 
        <ReactIcon key='ReactJs' width={isMobile ? '4vw' : '3vw'} />,
        <NextIcon key='NextJs' width={isMobile ? '4vw' : '3vw'} />,  
        <StyledIcon key='styled-components' width={isMobile ? '4vw' : '3vw'} />, 
        <HsIcon key='Handlebars' width={isMobile ? '4vw' : '3vw'} />,
    ];
}

export const IconsSkills = () => {
    const { isMobile } = useContext(DeviceContext);
    return [
        <HtmlIcon key={'HTML5'} width={isMobile ? '8vw' : '5vw'} />, 
        <CssIcon key={'CSS3'} width={isMobile ? '8vw' : '5vw'} />, 
        <SassIcon key={'Sass'} width={isMobile ? '8vw' : '5vw'} />, 
        <BsIcon key={'Bootstrap'} width={isMobile ? '8vw' : '5vw'} />, 
        <TailIcon key={'Tailwind'} width={isMobile ? '8vw' : '5vw'} />, 
        <ChakraIcon key={'ChakraUI'} width={isMobile ? '8vw' : '5vw'} />,
        <JsIcon key={'Javascript'} width={isMobile ? '8vw' : '5vw'} />,
        <TsIcon key={'Typescript'} width={isMobile ? '8vw' : '5vw'} />, 
        <ReactIcon key={'ReactJs'} width={isMobile ? '8vw' : '5vw'} />,
        <NextIcon key={'NextJs'} width={isMobile ? '8vw' : '5vw'} />,  
        <StyledIcon key={'styled-components'} width={isMobile ? '8vw' : '5vw'} />, 
        <HsIcon key={'Handlebars'} width={isMobile ? '8vw' : '5vw'} />,
    ];
}