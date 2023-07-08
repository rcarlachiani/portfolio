import { useContext } from "react"
import { ContainerFlex, Text, Title } from "../../styles/globalStyles"
import { theme } from "../../theme/theme"
import { DeviceContext, LanguageContext, ThemeContext } from "../../context/context"
import { TextEN, TextES, TitlesEN, TitlesES } from "../../translation/translation"
import { AboutImage } from "./aboutStyles"

const About = () => {
    const language = useContext(LanguageContext);
    const darkTheme = useContext(ThemeContext);
    const { isMobile } = useContext(DeviceContext);

    return (
        <ContainerFlex 
            height='inherit'
            width='inherit'
            padding='0'
            paddingsm='0 8vw'
            paddingmd='0 10vw'
            justifycontent='center'
            flexdirection='column'
            alignitems='center'
            gap='25px'
            gapmd='50px'
            filter={theme.shadows.mainShadow}
        >
            <Title
                color={darkTheme ? theme.colors.white : theme.colors.black} 
                fontsize='25px'
                fontsizesm='35px'
                fontsizemd='46px'
                fontsizelg='52px'
                fontsizexl='3.5vw'
                dangerouslySetInnerHTML={
                    {__html: language === 'en' ? 
                        (isMobile ? TitlesEN.about :  TitlesEN.about) 
                    : 
                        (isMobile ? TitlesES.about :  TitlesES.about) }
                }
            />
                <ContainerFlex 
                    height='65vh'
                    heightmd='50vh'
                    flexdirection='column'
                    flexdirectionmd='row'
                    alignitems='center'
                    alignitemsmd='start'
                    gap='28px'
                    gapmd='50px'
                >
                    <AboutImage src='/images/profile-picture-perspective.png' />
                    <ContainerFlex
                        overflowy='scroll'
                        maxwidth='56vw'
                        maxwidthmd='50vw'
                        maxwidthxl='40vw'
                        margin='0px'
                        marginmd='25px 0px 0px 0px'
                        marginxl='50px 0px 0px 0px'
                    >
                        <Text
                            color={darkTheme ? theme.colors.white : theme.colors.black}  
                            fontsize='14px'
                            fontsizemd='16px'
                            fontsizelg='17px'
                            fontsizexl='1.2vw'
                            lineheight='14px'
                            lineheightsm='16px'
                            lineheightmd='15px'
                            lineheightlg='unset'
                            textalign='start'
                            dangerouslySetInnerHTML={{__html: language === 'en' ? TextEN.aboutMe : TextES.aboutMe }}
                        />
                    </ContainerFlex>
                </ContainerFlex>
        </ContainerFlex>
    )
}

export default About