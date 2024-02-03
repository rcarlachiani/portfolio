import { useContext } from "react"
import { ContainerFlex, ContainerGrid, Text, Title } from "../../styles/globalStyles"
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
            height='inherit' 
            width='inherit'
            padding='0 10vw' 
            justifycontent='center'
            filter={theme.shadows.mainShadow}
        >
            <Title
                color={theme.colors.purpleWhite} 
                fontSize='25px'
                fontsizesm='28px'
                fontsizemd='35px'
                fontsizelg='45px'
                fontsizexl="3.4vw"
                textalign='center'
                dangerouslySetInnerHTML={
                    {__html: language === 'en' ? 
                        (isMobile ? TitlesEN.skills :  TitlesEN.skills.replace('<br>', '')) 
                    : 
                        (isMobile ? TitlesES.skills :  TitlesES.skills.replace('<br>', '')) }
                }
            />
            <ContainerFlex
                height='65vh'
                heightmd='60vh'
                alignitems='center'
                justifycontent='center'
            >
                <ContainerGrid
                    templatecols='repeat(3, 1fr)'
                    templatecolssm='repeat(4, 1fr)'
                    templatecolsmd='repeat(6, 0.13fr)'
                    templaterows='repeat(4, 0.2fr)'
                    templaterowssm='repeat(3, 0.5fr)'
                    templaterowsmd='repeat(2, 0.3fr)'
                    columngap='30px'
                    columngapmd='40px'
                    columngaplg='50px'
                    columngapxl='30px'
                    rowgap='10px'
                    rowgapsm='30px'
                    rowgapmd='60px'
                    rowgapxl='80px'
                >
                    {IconsSkills().map((icon) => (
                        <ContainerFlex 
                            flexdirection='column'
                            alignitems='center'
                            justifycontent='center'
                            key={icon.key}
                        >
                            {icon}
                            <Text
                                margin='0px'
                                marginsm='10px 0px 0px 0px'
                                marginmd='20px 0px 0px 0px'
                                fontSize='10px'
                                fontsizemd='14px'
                                fontsizelg='16px'
                                fontsizexl='1vw'
                                color={theme.colors.purpleWhite} 
                            >
                                {icon.key}
                            </Text>
                        </ContainerFlex>         
                    ))}
                </ContainerGrid>
            </ContainerFlex>
        </ContainerFlex>
    )
}

export default Skills