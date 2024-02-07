import { ContainerFlex, Text, Title } from "../../styles/globalStyles"
import { CardWrapper, ProjectImage, ProjectLink } from "./projectStyles"
import { useContext } from "react";
import { LanguageContext } from "../../context/context";
import { theme } from "../../theme/theme";
import { IconsProjects } from "../../components/icons/icons";
import Button from "../../components/button/button";

interface Props {
    projectData: {
        id: string;
        titleEN: string;
        titleES: string;
        subtitleEN: string;
        subtitleES: string;
        technologies: string[];
        image: string;
        url: string;
    }
}

const Project = ({projectData}: Props ) => {
    const language = useContext(LanguageContext);

    return (
        <CardWrapper>
            <ContainerFlex
                flexdirection='column'
                justifycontent='start'
                alignitems='center'
                width='190px'
                widthsm='280px'
                widthmd='240px'
                widthxl='260px'
                widthxxl='300px'
                height='300px'
                heightsm='400px'
                heightmd='340px'
                heightxl='380px'
                heightxxl='420px'
                borderradius='10px'
                backgroundcolor='hsla(242.2, 49.4%, 67.45%, 0.1)'
                backgroundblur='blur(6px)'
                overflowy='hidden'
                boxshadow={theme.shadows.boxShadow}
            >
                <ProjectImage src={projectData.image} alt='project image'/>   
                <ContainerFlex 
                    flexdirection='column'
                    alignitems='start'
                    justifycontent='space-between'
                    padding='10px 15px 15px 15px'
                    paddingsm='10px 20px 20px 20px'
                    width='inherit'
                    height='inherit'
                >
                    <Title 
                        fontSize='18px'
                        fontsizesm='24px'
                        fontsizemd='20px'
                        fontsizelg='22px'
                        textalign='start'
                        color={theme.colors.purpleWhite}
                        filter={theme.shadows.mainShadow}
                        dangerouslySetInnerHTML={{__html: language === 'en' ? projectData.titleEN : projectData.titleES}} 
                    />
                    <ContainerFlex 
                        flexdirection='column'
                        width='100%'
                        alignitems='start'
                    >
                        <ContainerFlex
                            padding='6px 2px 6px 2px'
                            paddingmd='4px 2px 4px 2px'
                            paddingxl='6px 2px 6px 2px'
                            borderradius='15px'
                            backgroundcolor='hsla(242.2, 49.4%, 67.45%, 0.1)'
                            backgroundblur='blur(6px)'
                        >
                            {
                                IconsProjects().map((icon) => (
                                    projectData.technologies.includes(`${icon.key}`) ? 
                                    (
                                        <ContainerFlex 
                                            key={icon.key}
                                            alignitems='center'
                                            width='12px' 
                                            height='14px'
                                            widthsm='16px' 
                                            heightsm='20px'  
                                            margin='0px 8px'
                                        >
                                            {icon}
                                        </ContainerFlex>
                                    ) : null
                                ))
                            }
                        </ContainerFlex>
                    </ContainerFlex>
                    <Text 
                        fontSize='10px'
                        fontsizesm='12px'
                        textalign='start'
                        maxwidth='280px'
                        filter={theme.shadows.mainShadow}
                        color={theme.colors.purpleWhite}
                        dangerouslySetInnerHTML={{__html: language === 'en' ? projectData.subtitleEN : projectData.subtitleES}}    
                    />
                    <ContainerFlex>
                        <ProjectLink href={projectData.url} target='_blank'>
                            <Button />
                        </ProjectLink>
                    </ContainerFlex>
                </ContainerFlex>
            </ContainerFlex>
        </CardWrapper>
    )
}

export default Project