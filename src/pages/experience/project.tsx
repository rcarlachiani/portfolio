import { ContainerFlex, Text, Title } from "../../styles/globalStyles"
import { CardWrapper, ProjectImage, ProjectLink } from "./projectStyles"
import { useContext } from "react";
import { LanguageContext, ThemeContext } from "../../context/context";
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
    const darkTheme = useContext(ThemeContext);

    return (
        <CardWrapper>
            <ContainerFlex
                flexdirection='column'
                justifycontent='center'
                alignitems='center'
                width='320px'
                height='450px'
                padding='15px'
                borderradius='15px'
                backgroundcolor='hsla(0,5% , 80%, 0.2)'
                backgroundblur='blur(4px)'
                boxshadow={theme.shadows.boxShadow}
            >
                <ProjectImage src={projectData.image} alt='project image'/>   
                <ContainerFlex 
                    flexdirection='column'
                    alignitems='center'
                    margin='10px 0px 0px 0px'
                    gap='15px'
                >
                    <Title 
                        fontsize='16px'
                        fontsizesm='18px'
                        fontsizemd='20px'
                        fontsizelg='22px'
                        fontsizexl='24px'
                        textalign='center'
                        textalignlg='start'
                        color={darkTheme ? theme.colors.white : theme.colors.black}
                        filter={theme.shadows.mainShadow}
                        dangerouslySetInnerHTML={{__html: language === 'en' ? projectData.titleEN : projectData.titleES}} 
                    />
                    <ContainerFlex 
                        flexdirection='column'
                        width='100%'
                        alignitems='center'
                    >
                        <ContainerFlex
                            padding='5px 4px 5px 4px'
                            borderradius='15px'
                            backgroundcolor='hsla(0,5% , 80%, 0.2);'
                            backgroundblur='blur(4px)'
                        >
                            {
                                IconsProjects().map((icon) => (
                                    projectData.technologies.includes(`${icon.key}`) ? 
                                    (
                                        <ContainerFlex 
                                            key={icon.key}
                                            alignitems='center'
                                            width='16px' 
                                            height='25px' 
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
                        fontsize='12px'
                        fontsizesm='14px'
                        fontsizexl='16px'
                        textalign='center'
                        maxwidth='280px'
                        filter={theme.shadows.mainShadow}
                        color={darkTheme ? theme.colors.white : theme.colors.black}
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