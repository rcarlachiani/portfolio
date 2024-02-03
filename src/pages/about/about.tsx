import { useContext } from "react"
import { ContainerFlex, Text, Title } from "../../styles/globalStyles"
import { theme } from "../../theme/theme"
import { DeviceContext, LanguageContext } from "../../context/context"
import { TextEN, TextES, TitlesEN, TitlesES } from "../../translation/translation"
import { AboutImage } from "./aboutStyles"

const About = () => {
    const language = useContext(LanguageContext);
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
            gap='15px'
            gapmd='0px'
            filter={theme.shadows.mainShadow}
        >
            <Title
                color={theme.colors.purpleWhite} 
                fontSize='25px'
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
                    flexdirection='column'
                    flexdirectionlg='row'
                    alignitems='center'
                    justifycontent='space-evenly'
                    gap='20px'
                    gaplg='50px'
                >
                    <AboutImage src='/images/profile-picture-perspective-II.png' />
                    <ContainerFlex
                        overflowy='scroll'
                        maxwidth='60vw'
                        maxwidthsm='50vw'
                        maxwidthxl='40vw'
                    >
                        <Text
                            color={theme.colors.purpleWhite}  
                            fontSize='11px'
                            fontsizesm='14px'
                            fontsizemd='16px'
                            fontsizexl='1.1vw'
                            lineheight='16px'
                            lineheightmd='20px'
                            lineheightlg='18px'
                            lineheightxl='unset'
                            textalign='start'
                            dangerouslySetInnerHTML={{__html: language === 'en' ? TextEN.aboutMe : TextES.aboutMe }}
                        />
                    </ContainerFlex>
                </ContainerFlex>
        </ContainerFlex>
    )
}

export default About