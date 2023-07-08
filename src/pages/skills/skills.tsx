import { useContext } from "react"
import { ContainerFlex, ContainerGrid, Text, Title } from "../../styles/globalStyles"
import { theme } from "../../theme/theme"
import { DeviceContext, LanguageContext, ThemeContext } from "../../context/context"
import { TitlesEN, TitlesES } from "../../translation/translation"
import { IconsSkills } from "../../components/icons/icons"

const Skills = () => {
    const language = useContext(LanguageContext);
    const darkTheme = useContext(ThemeContext);
    const { isMobile } = useContext(DeviceContext);

    return (
        <ContainerGrid 
            height='inherit' 
            width='inherit'
            padding='0 10vw' 
            templatecols='repeat(1, 1fr)'
            templaterows='1fr 3fr'
            justifycontent='center'
            alignitems='center'
            filter={theme.shadows.mainShadow}
        >
            <Title
                color={darkTheme ? theme.colors.white : theme.colors.black} 
                fontsize='25px'
                fontsizesm='28px'
                fontsizemd='35px'
                fontsizelg='45px'
                fontsizexl="3.4vw"
                textalign='center'
                alignself='end'
                dangerouslySetInnerHTML={
                    {__html: language === 'en' ? 
                        (isMobile ? TitlesEN.skills :  TitlesEN.skills.replace('<br>', '')) 
                    : 
                        (isMobile ? TitlesES.skills :  TitlesES.skills.replace('<br>', '')) }
                }
            />
            <ContainerGrid
                height='100%' 
                width='100%'
                alignitems='center'
                justifycontent='center'
                templatecols='repeat(3, 1fr)'
                templatecolsmd='repeat(4, 1fr)'
                templatecolsxl='repeat(6, 0.13fr)'
                templaterows='repeat(4, 0.2fr)'
                templaterowsmd='repeat(3, 0.25fr)'
                templaterowsxl='repeat(2, 0.35fr)'
                padding='0px'
                paddingsm='20px 0px 0px 0px'
                paddingmd='40px 0px 0px 0px'
            >
                {IconsSkills().map((icon) => (
                    <ContainerFlex 
                        flexdirection='column'
                        alignitems='center'
                        key={icon.key}
                    >
                        {icon}
                        <Text
                            margin='0px'
                            marginsm='10px 0px 0px 0px'
                            marginmd='20px 0px 0px 0px'
                            fontsize='10px'
                            fontsizemd='14px'
                            fontsizelg='16px'
                            fontsizexl='1.2vw'
                            color={darkTheme ? theme.colors.white : theme.colors.black} 
                        >
                            {icon.key}
                        </Text>
                    </ContainerFlex>         
                ))}
            </ContainerGrid>
        </ContainerGrid>
    )
}

export default Skills