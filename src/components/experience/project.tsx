import { ContainerFlex, Text, Title } from "../../styles/globalStyles"
import { CardWrapper, ProjectImage, ProjectLink } from "./projectStyles"
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
        url: string;
    }
}

const Project = ({projectData}: Props ) => {
    const { isMobile } = useContext(DeviceContext);

    const icons = [
        <HtmlIcon key='HTML5' width={isMobile ? '3.5vw' : '3vw'} height={isMobile ? '3.5vh' : '3vh'}/>, 
        <CssIcon key='CSS3' width={isMobile ? '3.5vw' : '3vw'} height={isMobile ? '3.5vh' : '3vh'}/>, 
        <SassIcon key='Sass' width={isMobile ? '3.5vw' : '3vw'} height={isMobile ? '3.5vh' : '3vh'}/>, 
        <BsIcon key='Bootstrap' width={isMobile ? '3.5vw' : '3vw'} height={isMobile ? '3.5vh' : '3vh'}/>, 
        <TailIcon key='TailwindCSS' width={isMobile ? '3.5vw' : '3vw'} height={isMobile ? '3.5vh' : '3vh'}/>, 
        <ChakraIcon key='ChakraUI' width={isMobile ? '3.5vw' : '3vw'} height={isMobile ? '3.5vh' : '3vh'}/>,
        <JsIcon key='Javascript' width={isMobile ? '3.5vw' : '3vw'} height={isMobile ? '3.5vh' : '3vh'}/>,
        <TsIcon key='Typescript' width={isMobile ? '3.5vw' : '3vw'} height={isMobile ? '3.5vh' : '3vh'}/>, 
        <ReactIcon key='ReactJs' width={isMobile ? '3.5vw' : '3vw'} height={isMobile ? '3.5vh' : '3vh'}/>,
        <NextIcon key='NextJs' width={isMobile ? '3.5vw' : '3vw'} height={isMobile ? '3.5vh' : '3vh'}/>,  
        <StyledIcon key='styled-components' width={isMobile ? '3.5vw' : '3vw'} height={isMobile ? '3.5vh' : '3vh'}/>, 
        <HsIcon key='Handlebars' width={isMobile ? '3.5vw' : '3vw'} height={isMobile ? '3.5vh' : '3vh'}/>,
    ];

    return (
        <ProjectLink href={projectData.url} target='_blank'>
            <CardWrapper>   
                <ContainerFlex width='275px' height='198px'>
                    <ProjectImage src={projectData.image} alt='Dot hotels project'/>
                </ContainerFlex>
                <ContainerFlex 
                    flexdirection='column'
                    alignitems='center'
                    margin='25px 0px 0px 0px'
                >
                    <Title 
                        fontSize={projectData.title.length > 14 ? '26px' : '30px'}
                        textalign='center'
                        dangerouslySetInnerHTML={{__html: projectData.title}} 
                    />
                    <Text 
                        fontSize={projectData.subtitle.length > 16 ? '12px' : '16px'}
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
            </CardWrapper>
        </ProjectLink>
    )
}

export default Project