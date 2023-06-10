import { useContext, useRef } from "react"
import { ContainerFlex, ContainerGrid, Text, Title } from "../../styles/globalStyles"
import { theme } from "../../theme/theme"
import { LanguageContext, ThemeContext } from "../../context/context"
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
    const language = useContext(LanguageContext)
    const darkTheme = useContext(ThemeContext)
    const headlineRef = useRef(null);
    const icons = [
        <HtmlIcon key={'HTML5'}/>, 
        <CssIcon key={'CSS3'}/>, 
        <SassIcon key={'Sass'}/>, 
        <BsIcon key={'Bootstrap'}/>, 
        <TailIcon key={'Tailwind'}/>, 
        <ChakraIcon key={'ChakraUI'}/>,
        <JsIcon key={'Javascript'}/>,
        <TsIcon key={'Typescript'}/>, 
        <ReactIcon key={'ReactJs'}/>,
        <NextIcon key={'NextJs'}/>,  
        <StyledIcon key={'styled-components'}/>, 
        <HsIcon key={'Handlebars'}/>,
    ];

    return (
        <ContainerGrid 
            height='inherit' 
            width='inherit' 
            gridtemplatecols='repeat(1, 1fr)'
            gridtemplaterows='1fr 3fr'
            justifyitems='center'
            alignitems='center'
            ref={headlineRef}
        >
            <Title
                color={darkTheme ? theme.colors.white : theme.colors.black} 
                fontSize='3.5vw'
                fontsizemobile='5vw'
                textalign='center'
                alignself='end'
                padding='0px 0px 40px 0px'
                dangerouslySetInnerHTML={{__html: language === 'en' ? TitlesEN.skills : TitlesES.skills }}
            />
            <ContainerGrid
                height='100%' 
                width='100%'
                alignitems='center'
                justifyitems='center'
                gridtemplatecols='repeat(4, 1fr)'
                gridtemplaterows='repeat(3, 1fr)'
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