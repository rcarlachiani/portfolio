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
            width='inherit' 
            height='calc(100dvh - 150px)'
            heightmd='calc(100dvh - 135px)' 
            margin='80px 0px 70px 0px'
            marginmd='80px 0px 55px 0px'
            overflowx='hidden'
            overflowy='hidden'
            justifycontent='center'
            flexdirection='column'
            alignitems='center'
            gap='2dvh'
            gaplg='50px'
            filter={theme.shadows.mainShadow}
        >
            <Title
                color={theme.colors.purpleWhite} 
                fontSize='25px'
                fontsizesm='28px'
                fontsizemd='35px'
                fontsizelg='45px'
                fontsizexl='55px'
                dangerouslySetInnerHTML={
                    {__html: language === 'en' ? 
                        (isMobile ? TitlesEN.about :  TitlesEN.about) 
                    : 
                        (isMobile ? TitlesES.about :  TitlesES.about) }
                }
            />
                <ContainerFlex 
                    flexdirection='column'
                    flexdirectionlg='row'
                    alignitems='center'
                    justifycontent='center'
                    gap='4dvh'
                    gaplg='80px'
                >
                    <AboutImage src='/images/profile-picture-perspective-II.png' />
                    <ContainerFlex
                        overflowy='scroll'
                        padding='0 6vw'
                        paddingsm='0 8vw'
                        paddinglg='0'
                    >
                        <Text
                            color={theme.colors.purpleWhite}  
                            fontSize='12px'
                            fontsizesm='14px'
                            fontsizemd='16px'
                            fontsizelg='18px'
                            fontsizexl='20px'
                            fontsizexxl='26px'
                            textalign='start'
                            dangerouslySetInnerHTML={{__html: language === 'en' ? TextEN.aboutMe : TextES.aboutMe }}
                        />
                    </ContainerFlex>
                </ContainerFlex>
        </ContainerFlex>
    )
}

export default About