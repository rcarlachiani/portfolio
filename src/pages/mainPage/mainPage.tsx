import { useContext } from "react"
import { ContainerFlex, Title } from "../../styles/globalStyles"
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
            height='inherit' 
            width='inherit' 
            justifycontent='center'
            alignitems='center'
            padding='0'
            paddingsm='0 8vw' 
            gap='60px'
            gaplg='120px'
            filter={theme.shadows.mainShadow}
        >
            <ContainerFlex 
                flexdirection='column'
                width='fit-content'
            >
                <Title 
                    backgroundclip='true'
                    fillcolor='true'
                    background='linear-gradient(310deg,#7928ca,#ff0080)'
                    fontSize='55px'
                    fontsizesm='62px'
                    fontsizemd='68px'
                    fontsizelg='80px'
                    fontsizexl='6vw'
                    textalign='center'
                    textalignmd='end'
                    dangerouslySetInnerHTML={{__html: language === 'en' ? TitlesEN.greeting : TitlesES.greeting }}
                />
                <Title
                    color={theme.colors.purpleWhite}  
                    fontSize='34px'
                    fontsizesm='38px'
                    fontsizemd='42px'
                    fontsizelg='52px'
                    fontsizexl='4.5vw'
                    textalign='center'
                    textalignmd='end' 
                    dangerouslySetInnerHTML={{__html: language === 'en' ? SubtitlesEN.whoIAm : SubtitlesES.whoIAm }}
                />
                <Title
                    color={theme.colors.purpleWhite}  
                    fontSize='16px'
                    fontsizesm='18px'
                    fontsizemd='20px'
                    fontsizelg='24px'
                    fontsizexl='2.1vw'
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