import { useContext } from "react"
import { ContainerFlex, ContainerGrid, Title } from "../../styles/globalStyles"
import { theme } from "../../theme/theme"
import { ProfileImage } from "./aboutStyles"
import { LanguageContext, ThemeContext } from "../../context/context"
import { SubtitlesEN, SubtitlesES, TitlesEN, TitlesES } from "../../translation/translation"

const About = () => {
    const language = useContext(LanguageContext);
    const darkTheme = useContext(ThemeContext);

    return (
        <ContainerGrid 
            height='inherit' 
            width='inherit' 
            templatecols='repeat(2, 1fr)'
            templatecolsmobile='1fr'
            templaterows='1fr'
            templaterowsmobile='repeat(2, 1fr)'
            gap='5vw'
            gapmobile='unset'
            justifyitems='center'
            alignitems='center'
        >
            <ContainerFlex 
                flexdirection='column'
                width='fit-content'
                justifyself='end'
                justifyselfmobile='unset'
                alignselfmobile='end'
                marginmobile='0px 0px 50px 0px'
            >
                <Title 
                    color={theme.colors.orange} 
                    fontSize='10vw'
                    fontsizetablet='12vw'
                    fontsizemobile="15vw"
                    textalign='end'
                    textalignmobile='center'
                    dangerouslySetInnerHTML={{__html: language === 'en' ? TitlesEN.greeting : TitlesES.greeting }}
                />
                <Title
                    color={darkTheme ? theme.colors.white : theme.colors.black}  
                    fontSize={language === 'en' ? '5.3vw' : '5.2vw'}
                    fontsizetablet={language === 'en' ? '6.5vw' : '6.1vw'}
                    fontsizemobile="9.5vw"
                    textalign='end'
                    textalignmobile='center' 
                    dangerouslySetInnerHTML={{__html: language === 'en' ? SubtitlesEN.whoIAm : SubtitlesES.whoIAm }}
                />
                <Title
                    color={darkTheme ? theme.colors.white : theme.colors.black}  
                    fontSize={language === 'en' ? '2.5vw' : '2.28vw'}
                    fontsizetablet={language === 'en' ? '3.1vw' : '2.7vw'}
                    fontsizemobile={language === 'en' ? '4.5vw' : '4.2vw'}
                    textalign='end' 
                    textalignmobile='center'
                    dangerouslySetInnerHTML={{__html: language === 'en' ? SubtitlesEN.role : SubtitlesES.role }}
                />
            </ContainerFlex>
            <ProfileImage src='/images/profile-picture.jpg' />
        </ContainerGrid>
    )
}

export default About