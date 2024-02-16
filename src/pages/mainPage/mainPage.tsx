import { useContext } from "react"
import { ContainerFlex, Subtitle, Title } from "../../styles/globalStyles"
import { theme } from "../../theme/theme"
import { MainPageImage } from "./mainPageStyles"
import { LanguageContext } from "../../context/context"
import { SubtitlesEN, SubtitlesES, TitlesEN, TitlesES } from "../../translation/translation"

const MainPage = () => {
    const language = useContext(LanguageContext);

    return (
        <ContainerFlex
            flexdirection='column'
            flexdirectionmd='row'
            width='inherit' 
            height='calc(100dvh - 150px)'
            heightmd='calc(100dvh - 135px)'
            margin='80px 0px 70px 0px'
            marginmd='80px 0px 55px 0px'
            overflowx='hidden'
            overflowy='hidden'
            justifycontent='center'
            alignitems='center'
            gap='6dvh'
            gapsm='8vw'
            filter={theme.shadows.mainShadow}
        >
            <ContainerFlex 
                flexdirection='column'
                width='fit-content'
                alignitems='center'
                alignitemsmd='flex-start'
            >
                <Title 
                    backgroundclip='true'
                    fillcolor='true'
                    background='linear-gradient(310deg,#7928ca,#ff0080)'
                    fontSize='45px'
                    fontsizesm='62px'
                    fontsizemd='60px'
                    fontsizelg='70px'
                    fontsizexl='80px'
                    fontsizexxl='90px'
                    textalign='center'
                    textalignmd='end'
                    dangerouslySetInnerHTML={{__html: language === 'en' ? TitlesEN.greeting : TitlesES.greeting }}
                />
                <Subtitle
                    color={theme.colors.purpleWhite}  
                    fontSize='36px'
                    fontsizesm='45px'
                    fontsizemd='50px'
                    fontsizelg='60px'
                    fontsizexl='80px'
                    fontsizexxl='100px'
                    textalign='center'
                    textalignmd='end' 
                    dangerouslySetInnerHTML={{__html: language === 'en' ? SubtitlesEN.whoIAm : SubtitlesES.whoIAm }}
                />
                <Subtitle
                    color={theme.colors.purpleWhite}  
                    fontSize='18px'
                    fontsizesm='22px'
                    fontsizemd='24px'
                    fontsizelg='29px'
                    fontsizexl='39px'
                    fontsizexxl='48px'
                    textalign='center' 
                    textalignmd='end'
                    dangerouslySetInnerHTML={{__html: language === 'en' ? SubtitlesEN.role : SubtitlesES.role }}
                />
            </ContainerFlex>
            <MainPageImage src='/images/main-3d.png' />
        </ContainerFlex>
    )
}

export default MainPage