import { useEffect, useRef, useState } from 'react'
import './styles/App.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import NavbarComponent from './components/navbar/navbar'
import { ContainerFlex, GradientBackground, Section } from './styles/globalStyles'
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
    localStorage.getItem('language') || 'en'
  );

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const sectionsRef = {
    main: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
  };

  const handleScroll = () => {
    // Iterating through each section ref
    Object.entries(sectionsRef).forEach(([sectionName, ref]) => {
      const viewportOffset = ref.current?.getBoundingClientRect();
      const top = viewportOffset?.top;

      if (top === 0) {
        const section = document.getElementById(`${sectionName}`);
        section !== null ? (section.style.fontSize = '15px', section.style.opacity = '1', section.style.borderLeft = '3px solid white') : null
      } else {
        const section = document.getElementById(`${sectionName}`);
        section !== null ? (section.style.fontSize = '14px', section.style.opacity = '0.4', section.style.borderLeft = 'none') : null
      }
    });
  };

  useEffect(() => {
    const container = document.querySelector('.container');
    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <DeviceProvider>
        <LanguageContext.Provider value={language}>
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
            backgroundcolor={theme.colors.purpleBackground}
          >
            <div
              style={{
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                color: 'white',
                height: '150px',
                margin: 'auto 0px auto 15px', 
              }}
            >
              <p
                id='main'
                style={{
                  transition: 'all 0.2s ease-in-out',
                  fontSize: '15px',
                  paddingLeft: '5px',
                  margin: '10px 0px',
                  opacity: '1',
                  borderLeft: '3px solid white'
                }}
              >
                Inicio
              </p>
              <p
                id='about'
                style={{
                  transition: 'all 0.2s ease-in-out',
                  fontSize: '14px',
                  paddingLeft: '5px',
                  margin: '10px 0px',
                  opacity: '0.4',
                }}
              >
                Acerca de
              </p>
              <p
                id='skills'
                style={{
                  transition: 'all 0.2s ease-in-out',
                  fontSize: '14px',
                  paddingLeft: '5px',
                  margin: '10px 0px',
                  opacity: '0.4',
                }}
              >
                Skills
              </p>
              <p
                id='experience'
                style={{
                  transition: 'all 0.2s ease-in-out',
                  fontSize: '14px',
                  paddingLeft: '5px',
                  margin: '10px 0px',
                  opacity: '0.4',
                }}
              >
                Experiencia
              </p>
            </div>
            <NavbarComponent setLanguage={setLanguage} />
            <Section ref={sectionsRef.main}>
              <MainPage />
            </Section>
            <Section ref={sectionsRef.about}>
              <About />
            </Section>
            <Section ref={sectionsRef.skills}>
              <Skills />
            </Section>
            <Section ref={sectionsRef.experience}>
              <Experience />
            </Section>
            <SwipeAnimation />
          </ContainerFlex>
          <GradientBackground />
          <ParticlesBackground />
        </LanguageContext.Provider>
      </DeviceProvider>
    </>
  );
}

export default App