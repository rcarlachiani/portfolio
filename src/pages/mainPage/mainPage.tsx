import { useContext } from "react"
import { ContainerFlex, Title } from "../../styles/globalStyles"
import { theme } from "../../theme/theme"
import { MainPageImage } from "./mainPageStyles"
import { LanguageContext, ThemeContext } from "../../context/context"
import { SubtitlesEN, SubtitlesES, TitlesEN, TitlesES } from "../../translation/translation"

const MainPage = () => {
    const language = useContext(LanguageContext);
    const darkTheme = useContext(ThemeContext);

    return (
        <ContainerFlex
            flexdirection='column'
            flexdirectionmd='row' 
            height='inherit' 
            width='inherit' 
            justifycontent='center'
            alignitems='center'
            padding='0'
            paddingsm='0 10vw' 
            gap='0px'
            gapmd='80px'
            gaplg='120px'
            filter={theme.shadows.mainShadow}
        >
            <ContainerFlex 
                flexdirection='column'
                width='fit-content'
            >
                <Title 
                    backgroundclip={true}
                    fillcolor={true}
                    background='linear-gradient(310deg,#7928ca,#ff0080)' 
                    fontsize='50px'
                    fontsizesm='60px'
                    fontsizemd='70px'
                    fontsizelg='80px'
                    fontsizexl='6vw'
                    textalign='center'
                    textalignmd='end'
                    dangerouslySetInnerHTML={{__html: language === 'en' ? TitlesEN.greeting : TitlesES.greeting }}
                />
                <Title
                    color={darkTheme ? theme.colors.white : theme.colors.black}  
                    fontsize='30px'
                    fontsizesm='35px'
                    fontsizemd='43px'
                    fontsizelg='52px'
                    fontsizexl='4.5vw'
                    textalign='center'
                    textalignmd='end' 
                    dangerouslySetInnerHTML={{__html: language === 'en' ? SubtitlesEN.whoIAm : SubtitlesES.whoIAm }}
                />
                <Title
                    color={darkTheme ? theme.colors.white : theme.colors.black}  
                    fontsize='14px'
                    fontsizesm='16px'
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