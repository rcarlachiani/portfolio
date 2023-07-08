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
        <HtmlIcon key='HTML5' width={isMobile ? '4vw' : '3vw'} height={isMobile ? '4vh' : '3vh'}/>, 
        <CssIcon key='CSS3' width={isMobile ? '4vw' : '3vw'} height={isMobile ? '4vh' : '3vh'}/>, 
        <SassIcon key='Sass' width={isMobile ? '4vw' : '3vw'} height={isMobile ? '4vh' : '3vh'}/>, 
        <BsIcon key='Bootstrap' width={isMobile ? '4vw' : '3vw'} height={isMobile ? '4vh' : '3vh'}/>, 
        <TailIcon key='TailwindCSS' width={isMobile ? '4vw' : '3vw'} height={isMobile ? '4vh' : '3vh'}/>, 
        <ChakraIcon key='ChakraUI' width={isMobile ? '4vw' : '3vw'} height={isMobile ? '4vh' : '3vh'}/>,
        <JsIcon key='Javascript' width={isMobile ? '4vw' : '3vw'} height={isMobile ? '4vh' : '3vh'}/>,
        <TsIcon key='Typescript' width={isMobile ? '4vw' : '3vw'} height={isMobile ? '4vh' : '3vh'}/>, 
        <ReactIcon key='ReactJs' width={isMobile ? '4vw' : '3vw'} height={isMobile ? '4vh' : '3vh'}/>,
        <NextIcon key='NextJs' width={isMobile ? '4vw' : '3vw'} height={isMobile ? '4vh' : '3vh'}/>,  
        <StyledIcon key='styled-components' width={isMobile ? '4vw' : '3vw'} height={isMobile ? '4vh' : '3vh'}/>, 
        <HsIcon key='Handlebars' width={isMobile ? '4vw' : '3vw'} height={isMobile ? '4vh' : '3vh'}/>,
    ];
}

export const IconsSkills = () => {
    const { isMobile } = useContext(DeviceContext);
    return [
        <HtmlIcon key={'HTML5'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>, 
        <CssIcon key={'CSS3'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>, 
        <SassIcon key={'Sass'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>, 
        <BsIcon key={'Bootstrap'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>, 
        <TailIcon key={'Tailwind'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>, 
        <ChakraIcon key={'ChakraUI'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>,
        <JsIcon key={'Javascript'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>,
        <TsIcon key={'Typescript'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>, 
        <ReactIcon key={'ReactJs'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>,
        <NextIcon key={'NextJs'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>,  
        <StyledIcon key={'styled-components'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>, 
        <HsIcon key={'Handlebars'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>,
    ];
}