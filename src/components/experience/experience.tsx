import { useContext } from "react"
import { ContainerGrid, Title } from "../../styles/globalStyles"
import { theme } from "../../theme/theme"
import { LanguageContext, ThemeContext } from "../../context/context"
import { TitlesEN, TitlesES } from "../../translation/translation"
import Slider from "react-slick"
import Project from "./project"
import data from '../../projects/projects.json'
import { SliderWrapper } from "./projectStyles"

const Experience = () => {
    const language = useContext(LanguageContext);
    const darkTheme = useContext(ThemeContext);
    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
      };

    return (
        <ContainerGrid 
            height='inherit' 
            width='inherit' 
            templatecols='repeat(1, 1fr)'
            templaterows='1fr 3fr'
            justifyitems='center'
            alignitems='center'
        >
            <Title
                color={darkTheme ? theme.colors.white : theme.colors.black} 
                fontSize='3.5vw'
                fontsizetablet="4vw"
                fontsizemobile='4.5vw'
                textalign='center'
                alignself='end'
                padding='0px 0px 40px 0px'
                dangerouslySetInnerHTML={{__html: language === 'en' ? TitlesEN.projects : TitlesES.projects }}
            />
            <SliderWrapper>
                <Slider {...settings}>
                    {data.projects.map((project) => (
                        <div key={project.id}>
                            <Project projectData={project}/>
                        </div>
                    ))}
                </Slider>
            </SliderWrapper>
        </ContainerGrid>
    )
}

export default Experience