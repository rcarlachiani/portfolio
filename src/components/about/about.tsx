import { useContext } from "react"
import { ContainerFlex, Title } from "../../styles/globalStyles"
import { theme } from "../../theme/theme"
import { ProfileImage } from "./aboutStyles"
import { LanguageContext, ThemeContext } from "../../context/context"
import { SubtitleAboutNameEN, SubtitleAboutNameES, SubtitleAboutRoleEN, SubtitleAboutRoleES, TitleAboutEN, TitleAboutES } from "../../translation/translation"

const About = () => {
    const language = useContext(LanguageContext)
    const darkTheme = useContext(ThemeContext)

    return (
        <ContainerFlex 
            height='100vh' 
            width='100vw' 
            justifycontent='center'
            alignitems='center'
            flexdirectionmobile='column'
        >
            <ContainerFlex 
                flexdirection='column'
                padding='0px 20px 0px 0px'
                paddingmobile='0px 0px 20px 0px'
                width='fit-content'
            >
                <Title 
                    color={theme.colors.orange} 
                    fontSize='10vw'
                    fontsizetablet='12vw'
                    fontsizemobile="15vw"
                    textalign='end'
                    textalignmobile='center'
                    dangerouslySetInnerHTML={{__html: language === 'en' ? TitleAboutEN : TitleAboutES }}
                />
                <Title
                    color={darkTheme ? theme.colors.white : theme.colors.black}  
                    fontSize={language === 'en' ? '5.3vw' : '5.2vw'}
                    fontsizetablet={language === 'en' ? '6.5vw' : '6.1vw'}
                    fontsizemobile="9.5vw"
                    textalign='end'
                    textalignmobile='center' 
                    dangerouslySetInnerHTML={{__html: language === 'en' ? SubtitleAboutNameEN : SubtitleAboutNameES }}
                />
                <Title
                    color={darkTheme ? theme.colors.white : theme.colors.black}  
                    fontSize={language === 'en' ? '2.5vw' : '2.28vw'}
                    fontsizetablet={language === 'en' ? '3.1vw' : '2.7vw'}
                    fontsizemobile={language === 'en' ? '4.5vw' : '4.2vw'}
                    textalign='end' 
                    textalignmobile='center'
                    dangerouslySetInnerHTML={{__html: language === 'en' ? SubtitleAboutRoleEN : SubtitleAboutRoleES }}
                />
            </ContainerFlex>
            <ProfileImage src='/images/profile-picture.jpg'/>
        </ContainerFlex>
    )
}

export default About