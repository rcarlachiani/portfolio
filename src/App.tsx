import { useEffect, useState } from 'react'
import './styles/App.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import NavbarComponent from './components/navbar/navbar'
import { ContainerFlex, Section } from './styles/globalStyles'
import { DeviceProvider, LanguageContext } from './context/context'
import { theme } from './theme/theme'
import MainPage from './pages/mainPage/mainPage'
import ParticlesBackground from './components/particlesBackground/particlesBackground'
import Skills from './pages/skills/skills'
import Experience from './pages/experience/experience'
import About from './pages/about/about';
import SwipeAnimation from './components/swipeAnimation/swipeAnimation';

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
              scrollsnap='both mandatory'
              width='100%'
              height='100dvh'
              className='container'
              // padding='0 10vw' 
              backgroundcolor={theme.colors.purpleBackground} 
            >
              <Section>
                <MainPage />
              </Section>
              <Section>
                <About />
              </Section>
              <Section>
                <Skills />
              </Section>
              <Section>
                <Experience />
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