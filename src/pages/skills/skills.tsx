import { useContext } from "react"
import { ContainerFlex, Text, Title } from "../../styles/globalStyles"
import { theme } from "../../theme/theme"
import { DeviceContext, LanguageContext } from "../../context/context"
import { TitlesEN, TitlesES } from "../../translation/translation"
import { IconsSkills } from "../../components/icons/icons"

const Skills = () => {
    const language = useContext(LanguageContext);
    const { isMobile } = useContext(DeviceContext);

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
            filter={theme.shadows.mainShadow}
        >
            <Title
                color={theme.colors.purpleWhite} 
                fontSize='25px'
                fontsizesm='28px'
                fontsizemd='35px'
                fontsizelg='45px'
                fontsizexl="3.4dvw"
                textalign='center'
                whitespace='pre'
                whitespacemd='unset'
                dangerouslySetInnerHTML={
                    {__html: language === 'en' ? 
                        (isMobile ? TitlesEN.skills :  TitlesEN.skills.replace('<br>', '')) 
                    : 
                        (isMobile ? TitlesES.skills :  TitlesES.skills.replace('<br>', '')) }
                }
            />
            <ContainerFlex
                flexwrap='wrap'
                justifycontent='center'
                rowgap='50px'
                columngap='20px'
                gapmd='25px'
                rowgapxxl='80px'
                columngapxxl='15px'
                padding='15px 0px 0px 0px'
                paddingxxl='30px 0px 0px 0px'
            >
                {IconsSkills().map((icon) => (
                    <ContainerFlex 
                        flexdirection='column'
                        flexbasis='25%'
                        flexbasismd='20%'
                        flexbasisxxl='15%'
                        alignitems='center'
                        justifycontent='center'
                        key={icon.key}
                    >
                        {icon}
                        <Text
                            margin='10px 0px 0px 0px'
                            marginmd='20px 0px 0px 0px'
                            fontSize='10px'
                            fontsizemd='14px'
                            fontsizelg='16px'
                            fontsizexl='1dvw'
                            color={theme.colors.purpleWhite} 
                        >
                            {icon.key}
                        </Text>
                    </ContainerFlex>         
                ))}
            </ContainerFlex>
        </ContainerFlex>
    )
}

export default Skills