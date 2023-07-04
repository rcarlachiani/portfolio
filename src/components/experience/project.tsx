import { ContainerFlex, Text, Title } from "../../styles/globalStyles"
import { ProjectImage } from "./projectStyles"
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

interface Props {
    projectData: {
        id: string;
        title: string;
        subtitle: string;
        technologies: string[];
        image: string;
    }
}

const Project = ({projectData}: Props ) => {
    const { isMobile } = useContext(DeviceContext);

    const icons = [
        <HtmlIcon key='HTML5' width={isMobile ? '3.5vw' : '2.5vw'} height={isMobile ? '3.5vh' : '2.5vh'}/>, 
        <CssIcon key='CSS3' width={isMobile ? '3.5vw' : '2.5vw'} height={isMobile ? '3.5vh' : '2.5vh'}/>, 
        <SassIcon key='Sass' width={isMobile ? '3.5vw' : '2.5vw'} height={isMobile ? '3.5vh' : '2.5vh'}/>, 
        <BsIcon key='Bootstrap' width={isMobile ? '3.5vw' : '2.5vw'} height={isMobile ? '3.5vh' : '2.5vh'}/>, 
        <TailIcon key='TailwindCSS' width={isMobile ? '3.5vw' : '2.5vw'} height={isMobile ? '3.5vh' : '2.5vh'}/>, 
        <ChakraIcon key='ChakraUI' width={isMobile ? '3.5vw' : '2.5vw'} height={isMobile ? '3.5vh' : '2.5vh'}/>,
        <JsIcon key='Javascript' width={isMobile ? '3.5vw' : '2.5vw'} height={isMobile ? '3.5vh' : '2.5vh'}/>,
        <TsIcon key='Typescript' width={isMobile ? '3.5vw' : '2.5vw'} height={isMobile ? '3.5vh' : '2.5vh'}/>, 
        <ReactIcon key='ReactJs' width={isMobile ? '3.5vw' : '2.5vw'} height={isMobile ? '3.5vh' : '2.5vh'}/>,
        <NextIcon key='NextJs' width={isMobile ? '3.5vw' : '2.5vw'} height={isMobile ? '3.5vh' : '2.5vh'}/>,  
        <StyledIcon key='styled-components' width={isMobile ? '3.5vw' : '2.5vw'} height={isMobile ? '3.5vh' : '2.5vh'}/>, 
        <HsIcon key='Handlebars' width={isMobile ? '3.5vw' : '2.5vw'} height={isMobile ? '3.5vh' : '2.5vh'}/>,
    ];

    return (
        <ContainerFlex
            width='300px'
            height='400px'
            flexdirection='column'
            alignitems='center'
            backgroundcolor='rgba(0, 0, 0, 0.05)'
            backgroundblur='blur(5px)'
            boxshadow='8px 11px 15px -9px rgba(0,0,0,0.45)'
            borderradius='8px'
            padding='10px'
            margin='0px 34px'
        >
            <ContainerFlex width='282px' height='200px'>
                <ProjectImage src={projectData.image} alt='Dot hotels project'/>
            </ContainerFlex>
            <ContainerFlex 
                flexdirection='column'
                alignitems='center'
                margin='25px 0px 0px 0px'
            >
                <Title 
                    fontSize='35px'
                    textalign='center'
                    dangerouslySetInnerHTML={{__html: projectData.title}} 
                />
                <Text 
                    fontSize='15px'
                    textalign='center'
                    margin='20px 0px'
                    dangerouslySetInnerHTML={{__html: projectData.subtitle}}    
                />
                <ContainerFlex margin='8px 0px 0px 0px'>
                    {
                        icons.map((icon) => (
                            projectData.technologies.includes(`${icon.key}`) ? 
                            (
                                <ContainerFlex key={icon.key}>
                                    {icon}
                                </ContainerFlex>
                            ) : null
                        ))
                    }
                </ContainerFlex>
            </ContainerFlex>
        </ContainerFlex>
    )
}

export default Project