import { useEffect, useState } from 'react'
import './styles/App.css'
import 'swiper/css';
import 'swiper/css/bundle';
import NavbarComponent from './components/navbar/navbar'
import { ContainerFlex, Section } from './styles/globalStyles'
import { DeviceProvider, LanguageContext, ThemeContext } from './context/context'
import { theme } from './theme/theme'
import Lottie from "lottie-react";
import animationData from './assets/scroll-animation.json';
import animationDataWhite from './assets/scroll-animation-white.json';
import MainPage from './pages/mainPage/mainPage'
import ParticlesBackground from './components/particlesBackground/particlesBackground'
import Skills from './pages/skills/skills'
import Experience from './pages/experience/experience'
import About from './pages/about/about';

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(
    localStorage.getItem('darkTheme') === 'true'
  );
  const [language, setLanguage] = useState<string>(
    localStorage.getItem('language') || 'en'
  );

  useEffect(() => {
    localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
  }, [darkTheme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

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
              backgroundcolor={darkTheme ? theme.colors.black : theme.colors.whiteBackground} 
            >
              <NavbarComponent setDarkTheme={setDarkTheme} setLanguage={setLanguage}/>
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
              <ContainerFlex 
                position='fixed' 
                bottom='0'
                padding='10px 0px'
                height='80px' 
                justifycontent='center'
                zindex={1}
              >
                <Lottie 
                  animationData={darkTheme ? animationDataWhite : animationData} 
                  loop={true}
                />
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