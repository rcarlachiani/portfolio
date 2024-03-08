import { useContext } from "react"
import { ContainerFlex, Link, Subtitle, Text, Title } from "../../styles/globalStyles"
import { theme } from "../../theme/theme"
import { DeviceContext, LanguageContext } from "../../context/context"
import { TextEN, TextES, TitlesEN, TitlesES, SubtitlesEN, SubtitlesES, ButtonsEN, ButtonsES } from "../../translation/translation"
import Button from "../../components/button/button"

const Experience = () => {
    const language = useContext(LanguageContext);
    const { isMobile } = useContext(DeviceContext);

    return (
        <ContainerFlex 
            width='inherit' 
            height='calc(100dvh - 150px)'
            heightmd='calc(100dvh - 135px)' 
            margin='80px 0px 70px 0px'
            marginmd='80px 0px 55px 0px'
            justifycontent='center'
            flexdirection='column'
            alignitems='center'
            gap='30px'
            gapsm='6dvh'
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
                textalign='center'
                dangerouslySetInnerHTML={
                    {__html: language === 'en' ? 
                        (isMobile ? TitlesEN.experience :  TitlesEN.experience) 
                    : 
                        (isMobile ? TitlesES.experience :  TitlesES.experience) }
                }
            />
            <ContainerFlex flexdirection='column'>
                <Subtitle 
                    color={theme.colors.purpleWhite}
                    fontSize='14px' 
                    fontsizesm='18px'
                    fontsizemd='20px'
                    fontsizelg='22px'
                    fontsizexl='24px'
                    fontsizexxl='28px'
                    margin='0px 0px 10px 0px' 
                    dangerouslySetInnerHTML={
                        {__html: language === 'en' ? SubtitlesEN.experience.second : SubtitlesES.experience.second }}
                />
                <Text
                    color={theme.colors.purpleWhite}  
                    fontSize='13px'
                    fontsizesm='14px'
                    fontsizemd='16px'
                    fontsizelg='18px'
                    fontsizexl='20px'
                    fontsizexxl='22px'
                    textalign='start'
                    margin='0px 0px 20px 0px'
                    marginmd='0px 0px 40px 0px'
                    dangerouslySetInnerHTML={{__html: language === 'en' ? TextEN.experience.second : TextES.experience.second }}
                />
                <Subtitle 
                    color={theme.colors.purpleWhite}
                    fontSize='14px' 
                    fontsizesm='18px'
                    fontsizemd='20px'
                    fontsizelg='22px'
                    fontsizexl='24px'
                    fontsizexxl='28px' 
                    margin='0px 0px 10px 0px' 
                    dangerouslySetInnerHTML={
                        {__html: language === 'en' ? SubtitlesEN.experience.first : SubtitlesES.experience.first }}
                />
                <Text
                    color={theme.colors.purpleWhite}  
                    fontSize='13px'
                    fontsizesm='14px'
                    fontsizemd='16px'
                    fontsizelg='18px'
                    fontsizexl='20px'
                    fontsizexxl='22px'
                    textalign='start'
                    dangerouslySetInnerHTML={{__html: language === 'en' ? TextEN.experience.first : TextES.experience.first }}
                />
            </ContainerFlex>
            <ContainerFlex>
                <Link 
                    href={language === 'en' ? '/files/Resume-Rodrigo-Carlachiani_Frontend.pdf' : '/files/CV-Rodrigo-Carlachiani_Frontend.pdf'} 
                    download={language === 'en' ? 'Resume-Rodrigo-Carlachiani_Frontend.pdf' : 'CV-Rodrigo-Carlachiani_Frontend.pdf'}
                    target='_blank' 
                >
                    <Button
                        buttonText={language === 'en' ? ButtonsEN.downloadCV : ButtonsES.downloadCV}
                        width='100px'
                        height='30px'
                        widthsm='120px'
                        heightsm='30px'
                        widthlg='150px'
                        heightlg='35px'
                    />
                </Link>
            </ContainerFlex>
        </ContainerFlex>
    )
}

export default Experience