import { useState } from 'react'
import './styles/App.css'
import './styles/slick.css'
import './styles/slick-theme.css'
import NavbarComponent from './components/navbar/navbar'
import { ContainerFlex, Section } from './styles/globalStyles'
import { DeviceProvider, LanguageContext, ThemeContext } from './context/context'
import { theme } from './theme/theme'
import Lottie from "lottie-react";
import animationData from './assets/scroll-animation.json';
import animationDataWhite from './assets/scroll-animation-white.json';
import About from './components/about/about'
import ParticlesBackground from './components/particlesBackground/particlesBackground'
import Skills from './components/skills/skills'
import Experience from './components/experience/experience'

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false)
  const [language, setLanguage] = useState<string>('en')

  return (
    <>
      <DeviceProvider>
        <LanguageContext.Provider value={language}>
          <ThemeContext.Provider value={darkTheme}>
            <ContainerFlex
              flexdirection='column'
              alignitems='center'
              overflowy='auto'
              overscrolly='contain'
              scrollsnap='y mandatory'
              width='100%'
              height='100vh'
              className='container'
              padding='0px 35px' 
              backgroundcolor={darkTheme ? theme.colors.black : theme.colors.white} 
            >
              <NavbarComponent setDarkTheme={setDarkTheme} setLanguage={setLanguage}/>
              <Section>
                <About />
              </Section>
              <Section>
                <Skills />
              </Section>
              <Section>
                <Experience />
              </Section>
              <ContainerFlex 
                position='fixed' 
                bottom='0'
                padding='10px 0px'
                height='80px' 
                justifycontent='center'
              >
                <Lottie animationData={darkTheme ? animationDataWhite : animationData} loop={true}/>
              </ContainerFlex>
            </ContainerFlex>
            <ParticlesBackground />
          </ThemeContext.Provider>
        </LanguageContext.Provider>
      </DeviceProvider>
    </>
  )
}

export default App