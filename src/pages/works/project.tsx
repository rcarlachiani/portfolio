import { ContainerFlex, Subtitle, Text } from "../../styles/globalStyles"
import { ProjectLink } from "./projectStyles"
import { useContext } from "react";
import { LanguageContext } from "../../context/context";
import { theme } from "../../theme/theme";
import { IconsProjects } from "../../components/icons/icons";
import Button from "../../components/button/button";
import { ButtonsEN, ButtonsES } from "../../translation/translation";

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
        <ContainerFlex
            flexdirection='column'
            flexbasis='46%'
            flexbasissm='47%'
            flexbasismd='31%'
            alignitems='start'
            justifycontent='space-between'
            padding='10px'
            paddingsm='12px'
            paddingmd='14px'
            height='18dvh'
            heightsm='20dvh'
            heightmd='22dvh'
            heightlg='24dvh'
            heightxl='26dvh'
            borderradius='10px'
            backgroundcolor='hsla(242.2, 49.4%, 67.45%, 0.1)'
            backgroundblur='blur(6px)'
            overflowy='hidden'
            boxshadow={theme.shadows.boxShadow}
        >
            <Subtitle 
                fontSize='12px'
                fontsizesm='14px'
                fontsizemd='16px'
                fontsizelg='19px'
                fontsizexl='22px'
                textalign='start'
                color={theme.colors.purpleWhite}
                filter={theme.shadows.mainShadow}
                dangerouslySetInnerHTML={{__html: language === 'en' ? projectData.titleEN : projectData.titleES}} 
            />
            <ContainerFlex
                gap='8px'
                gaplg='10px'
                gapxl='12px'
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
                                widthlg='18px'
                                heightlg='22px'
                                widthxl='20px'
                                heightxl='24px' 
                            >
                                {icon}
                            </ContainerFlex>
                        ) : null
                    ))
                }
            </ContainerFlex> 
                <Text 
                    fontSize='8px'
                    fontsizesm='10px'
                    fontsizelg='12px'
                    fontsizexl='14px'
                    textalign='start'
                    filter={theme.shadows.mainShadow}
                    color={theme.colors.purpleWhite}
                    dangerouslySetInnerHTML={{__html: language === 'en' ? projectData.subtitleEN : projectData.subtitleES}}    
                />
            <ContainerFlex>
                <ProjectLink href={projectData.url} target='_blank'>
                    <Button 
                        buttonText={language === 'en' ? ButtonsEN.goToProject : ButtonsES.goToProject}
                    />
                </ProjectLink>
            </ContainerFlex>
        </ContainerFlex>
    )
}

export default Project