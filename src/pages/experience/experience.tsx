import { useContext } from "react"
import { ContainerFlex, Title } from "../../styles/globalStyles"
import { theme } from "../../theme/theme"
import { LanguageContext } from "../../context/context"
import { TitlesEN, TitlesES } from "../../translation/translation"
import Project from "./project"
import data from '../../projects/projects.json'

const Experience = () => {
    const language = useContext(LanguageContext);

    return (
        <ContainerFlex
            flexdirection='column' 
            width='inherit' 
            height='calc(100dvh - 150px)'
            heightmd='calc(100dvh - 135px)' 
            margin='80px 0px 70px 0px'
            marginmd='80px 0px 55px 0px'
            gap='4dvh'
            gapsm='6dvh'
            justifycontent='center'
            alignitems='center'
        >
            <Title
                color={theme.colors.purpleWhite} 
                fontSize='25px'
                fontsizesm='28px'
                fontsizemd='35px'
                fontsizelg='45px'
                fontsizexl="3.4vw"
                textalign='center'
                padding='0 8vw'
                whitespace='pre'
                whitespacemd='unset'
                filter={theme.shadows.mainShadow}
                dangerouslySetInnerHTML={{__html: language === 'en' ? TitlesEN.projects : TitlesES.projects }}
            />
            <ContainerFlex
                width='100%'
                flexwrap='wrap'
                justifycontent='center'
                gap='15px'
                gaplg='20px'
                gapxl='25px'
            >
                {data.projects.map((project) => (
                    <Project key={project.id} projectData={project}/>
                ))}
            </ContainerFlex>
        </ContainerFlex>
    )
}

export default Experience