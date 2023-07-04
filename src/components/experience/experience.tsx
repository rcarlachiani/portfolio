import { useContext } from "react"
import { ContainerFlex, ContainerGrid, Title } from "../../styles/globalStyles"
import { theme } from "../../theme/theme"
import { LanguageContext, ThemeContext } from "../../context/context"
import { TitlesEN, TitlesES } from "../../translation/translation"
import Slider from "react-slick"
import Project from "./project"
import data from '../../projects/projects.json'

const Experience = () => {
    const language = useContext(LanguageContext);
    const darkTheme = useContext(ThemeContext);
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
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
            <ContainerFlex 
                maxwidth='1102px' 
                height='450px' 
                justifycontent='center' 
                alignself='baseline'
                //margin='25px 0px 0px 0px'
            >
                <Slider {...settings}>
                    {data.projects.map((project) => (
                        <div key={project.id}>
                            <Project projectData={project}/>
                        </div>
                    ))}
                </Slider>
            </ContainerFlex>
        </ContainerGrid>
    )
}

export default Experience