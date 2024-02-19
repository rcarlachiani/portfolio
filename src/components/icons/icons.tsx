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
        <HtmlIcon key='HTML5' width={isMobile ? '4dvw' : '3dvw'} />, 
        <CssIcon key='CSS3' width={isMobile ? '4dvw' : '3dvw'} />, 
        <SassIcon key='Sass' width={isMobile ? '4dvw' : '3dvw'} />, 
        <BsIcon key='Bootstrap' width={isMobile ? '4dvw' : '3dvw'} />, 
        <TailIcon key='TailwindCSS' width={isMobile ? '4dvw' : '3dvw'} />, 
        <ChakraIcon key='ChakraUI' width={isMobile ? '4dvw' : '3dvw'} />,
        <JsIcon key='Javascript' width={isMobile ? '4dvw' : '3dvw'} />,
        <TsIcon key='Typescript' width={isMobile ? '4dvw' : '3dvw'} />, 
        <ReactIcon key='ReactJs' width={isMobile ? '4dvw' : '3dvw'} />,
        <NextIcon key='NextJs' width={isMobile ? '4dvw' : '3dvw'} />,  
        <StyledIcon key='styled-components' width={isMobile ? '4dvw' : '3dvw'} />, 
        <HsIcon key='Handlebars' width={isMobile ? '4dvw' : '3dvw'} />,
    ];
}

export const IconsSkills = () => {
    const { isMobile } = useContext(DeviceContext);
    return [
        <HtmlIcon key={'HTML5'} width={isMobile ? '9dvw' : '5dvw'} />, 
        <CssIcon key={'CSS3'} width={isMobile ? '9dvw' : '5dvw'} />, 
        <SassIcon key={'Sass'} width={isMobile ? '9dvw' : '5dvw'} />, 
        <BsIcon key={'Bootstrap'} width={isMobile ? '9dvw' : '5dvw'} />, 
        <TailIcon key={'Tailwind'} width={isMobile ? '9dvw' : '5dvw'} />, 
        <ChakraIcon key={'ChakraUI'} width={isMobile ? '9dvw' : '5dvw'} />,
        <JsIcon key={'Javascript'} width={isMobile ? '9dvw' : '5dvw'} />,
        <TsIcon key={'Typescript'} width={isMobile ? '9dvw' : '5dvw'} />, 
        <ReactIcon key={'ReactJs'} width={isMobile ? '9dvw' : '5dvw'} />,
        <NextIcon key={'NextJs'} width={isMobile ? '9dvw' : '5dvw'} />,  
        <StyledIcon key={'styled-components'} width={isMobile ? '9dvw' : '5dvw'} />, 
        <HsIcon key={'Handlebars'} width={isMobile ? '9dvw' : '5dvw'} />,
    ];
}