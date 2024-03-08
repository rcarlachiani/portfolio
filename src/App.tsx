import { useEffect, useState } from 'react'
import './styles/App.css'
import NavbarComponent from './components/navbar/navbar'
import { ContainerFlex, Section } from './styles/globalStyles'
import { DeviceProvider, LanguageContext } from './context/context'
import { theme } from './theme/theme'
import MainPage from './pages/mainPage/mainPage'
import ParticlesBackground from './components/particlesBackground/particlesBackground'
import Skills from './pages/skills/skills'
import Works from './pages/works/works'
import About from './pages/about/about';
import SwipeAnimation from './components/swipeAnimation/swipeAnimation';
import Experience from './pages/experience/experience'

function App() {
  const [language, setLanguage] = useState<string>(
    localStorage.getItem('language') || 'es'
  );

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <>
      <DeviceProvider>
        <LanguageContext.Provider value={language}>
            <NavbarComponent setLanguage={setLanguage}/>
            <ContainerFlex
              flexdirection='column'
              alignitems='center'
              overflowy='auto'
              overscrolly='contain'
              scrollsnap='y mandatory'
              width='100%'
              height='100dvh'
              className='container'
              padding='0 10vw' 
              backgroundcolor={theme.colors.purpleBackground} 
            >
              <Section>
                <MainPage />
              </Section>
              <Section>
                <About />
              </Section>
              <Section>
                <Experience />
              </Section>
              <Section>
                <Skills />
              </Section>
              <Section>
                <Works />
              </Section>
            <SwipeAnimation />
            </ContainerFlex>
            <ParticlesBackground /> 
        </LanguageContext.Provider>
      </DeviceProvider>
    </>
  )
}

export default App