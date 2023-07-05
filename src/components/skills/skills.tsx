import { useContext } from "react"
import { ContainerFlex, ContainerGrid, Text, Title } from "../../styles/globalStyles"
import { theme } from "../../theme/theme"
import { DeviceContext, LanguageContext, ThemeContext } from "../../context/context"
import { TitlesEN, TitlesES } from "../../translation/translation"
import { HtmlIcon } from "../icons/html5"
import { NextIcon } from "../icons/nextjs"
import { ReactIcon } from "../icons/react"
import { CssIcon } from "../icons/css3"
import { BsIcon } from "../icons/bootstrap"
import { JsIcon } from "../icons/javascript"
import { TsIcon } from "../icons/typescript"
import { TailIcon } from "../icons/tailwind"
import { HsIcon } from "../icons/handlebars"
import { StyledIcon } from "../icons/styled-components"
import { SassIcon } from "../icons/sass"
import { ChakraIcon } from "../icons/chakraui"


const Skills = () => {
    const language = useContext(LanguageContext);
    const darkTheme = useContext(ThemeContext);
    const { isMobile } = useContext(DeviceContext);
    const icons = [
        <HtmlIcon key={'HTML5'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>, 
        <CssIcon key={'CSS3'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>, 
        <SassIcon key={'Sass'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>, 
        <BsIcon key={'Bootstrap'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>, 
        <TailIcon key={'Tailwind'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>, 
        <ChakraIcon key={'ChakraUI'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>,
        <JsIcon key={'Javascript'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>,
        <TsIcon key={'Typescript'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>, 
        <ReactIcon key={'ReactJs'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>,
        <NextIcon key={'NextJs'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>,  
        <StyledIcon key={'styled-components'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>, 
        <HsIcon key={'Handlebars'} width={isMobile ? '10vw' : '9vw'} height={isMobile ? '10vh' : '9vh'}/>,
    ];

    return (
        <ContainerGrid 
            height='inherit' 
            //width='inherit' 
            templatecols='repeat(1, 1fr)'
            templaterows='1fr 3fr'
            justifyitems='center'
            alignitems='center'
        >
            <Title
                color={darkTheme ? theme.colors.white : theme.colors.black} 
                fontSize='3.5vw'
                fontsizetablet="4vw"
                fontsizemobile='5vw'
                textalign='center'
                alignself='end'
                padding='0px 0px 40px 0px'
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
                justifyitems='center'
                templatecols='repeat(6, 1fr)'
                templaterows='repeat(2, 1fr)'
                templatecolstablet='repeat(4, 1fr)'
                templaterowstablet='repeat(3, 1fr)'
                padding='0px 0px 80px 0px'
            >
                {icons.map((icon) => (
                    <ContainerFlex 
                        flexdirection='column'
                        alignitems='center'
                        key={icon.key}
                    >
                        {icon}
                        <Text
                            margin='10px 0px 0px 0px'
                            fontSize='1.4vw'
                            fontsizetablet='1.8vw'
                            fontsizemobile='2vw'
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