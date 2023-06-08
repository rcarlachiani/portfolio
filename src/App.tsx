import { useState } from 'react'
import './styles/App.css'
import NavbarComponent from './components/navbar/navbar'
import { ContainerFlex, Section } from './styles/globalStyles'
import { LanguageContext, ThemeContext } from './context/context'
import { theme } from './theme/theme'
import Lottie from "lottie-react";
import animationData from './assets/scroll-animation.json';
import animationDataWhite from './assets/scroll-animation-white.json';
import About from './components/about/about'
import ParticlesBackground from './components/particlesBackground/particlesBackground'

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false)
  const [language, setLanguage] = useState<string>('en')

  return (
    <>
      <LanguageContext.Provider value={language}>
        <ThemeContext.Provider value={darkTheme}>
          <ContainerFlex 
            flexdirection='column'
            alignitems='center' 
            padding='0px 35px' 
            backgroundcolor={darkTheme ? theme.colors.black : theme.colors.white}
          >
            <NavbarComponent setDarkTheme={setDarkTheme} setLanguage={setLanguage}/>
            <Section>
              <About />
            </Section>
            <Section>
              <ContainerFlex height='100vh'>
                Skills
              </ContainerFlex>
            </Section>
            <Section>
              <ContainerFlex height='100vh'>
                Proyects
              </ContainerFlex>
            </Section>
            <Section>
              <ContainerFlex height='100vh'>
                Experience
              </ContainerFlex>
            </Section>
            <ContainerFlex 
              position='fixed' 
              bottom='0'
              padding='10px 0px'
              height='50px' 
              justifycontent='center'
            >
              <Lottie animationData={darkTheme ? animationDataWhite : animationData} loop={true}/>
            </ContainerFlex>
          </ContainerFlex>
          <ParticlesBackground />
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </>
  )
}

export default App